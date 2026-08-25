import { useEffect, useState } from "react";
import { supabase, isSupabaseConfigured } from "../lib/supabase";
import { useContent } from "../lib/content";
import { collections } from "./schema";
import ProfileEditor from "./ProfileEditor";
import CollectionEditor from "./CollectionEditor";
import { seedFromDefaults } from "./seed";
import "./admin.css";

const TABS = ["profile", ...Object.keys(collections)];

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    setBusy(false);
  };

  return (
    <div className="ad-login">
      <form className="ad-login__card" onSubmit={submit}>
        <h1>Portfolio admin</h1>
        <p className="ad-muted">Sign in to edit the site content.</p>

        <label className="ad-field">
          <span className="ad-label">Email</span>
          <input
            className="ad-input"
            type="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="ad-field">
          <span className="ad-label">Password</span>
          <input
            className="ad-input"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        {error ? <p className="ad-error">{error}</p> : null}

        <button className="ad-btn" type="submit" disabled={busy}>
          {busy ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}

export default function AdminApp() {
  const [session, setSession] = useState(null);
  const [ready, setReady] = useState(false);
  const [tab, setTab] = useState("profile");
  const [seedMsg, setSeedMsg] = useState("");
  const { reload } = useContent();

  const runSeed = async () => {
    setSeedMsg("Importing…");
    try {
      const result = await seedFromDefaults();
      setSeedMsg(result);
      reload();
    } catch (err) {
      setSeedMsg(err.message || "Import failed");
    }
  };

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setReady(true);
      return;
    }
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setReady(true);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  if (!isSupabaseConfigured) {
    return (
      <div className="ad-login">
        <div className="ad-login__card">
          <h1>Admin unavailable</h1>
          <p className="ad-muted">
            Supabase isn’t configured. Set <code>REACT_APP_SUPABASE_URL</code> and{" "}
            <code>REACT_APP_SUPABASE_ANON_KEY</code>, then redeploy. See{" "}
            <code>supabase/README.md</code> for the full setup.
          </p>
        </div>
      </div>
    );
  }

  if (!ready) return <div className="ad-login"><p className="ad-muted">Loading…</p></div>;
  if (!session) return <Login />;

  return (
    <div className="ad-shell">
      <header className="ad-topbar">
        <nav className="ad-tabs">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              className={`ad-tab ${tab === t ? "is-active" : ""}`}
              onClick={() => setTab(t)}
            >
              {t === "profile" ? "Profile" : collections[t].label}
            </button>
          ))}
        </nav>
        <div className="ad-topbar__right">
          <button type="button" className="ad-btn ad-btn--ghost" onClick={runSeed}>
            Import built-in content
          </button>
          <a className="ad-btn ad-btn--ghost" href="/">View site</a>
          <button
            type="button"
            className="ad-btn ad-btn--ghost"
            onClick={() => supabase.auth.signOut()}
          >
            Sign out
          </button>
        </div>
      </header>

      <main className="ad-main">
        {seedMsg ? <p className="ad-muted">{seedMsg}</p> : null}

        {tab === "profile" ? (
          <ProfileEditor onSaved={reload} />
        ) : (
          <CollectionEditor config={collections[tab]} onSaved={reload} />
        )}
      </main>
    </div>
  );
}
