import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { defaultProfile } from "../data/defaultContent";
import { profileFields } from "./schema";
import Field from "./Field";

export default function ProfileEditor({ onSaved }) {
  const [profile, setProfile] = useState(defaultProfile);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("site_profile")
      .select("*")
      .eq("id", 1)
      .maybeSingle()
      .then(({ data }) => {
        if (data) setProfile(data);
        setLoading(false);
      });
  }, []);

  const patch = (key, value) => setProfile((p) => ({ ...p, [key]: value }));

  const save = async () => {
    setStatus("Saving…");
    const { error } = await supabase
      .from("site_profile")
      .upsert({ ...profile, id: 1 }, { onConflict: "id" });
    setStatus(error ? error.message : "Saved");
    if (!error) onSaved?.();
  };

  if (loading) return <p className="ad-muted">Loading profile…</p>;

  return (
    <div>
      <div className="ad-sectionhead">
        <h2>Profile</h2>
        <div className="ad-sectionhead__right">
          {status ? <span className="ad-status">{status}</span> : null}
          <button type="button" className="ad-btn" onClick={save}>
            Save
          </button>
        </div>
      </div>

      <div className="ad-item__body">
        {profileFields.map((f) => (
          <Field
            key={f.key}
            field={f}
            value={profile[f.key]}
            folder="profile"
            onChange={patch}
          />
        ))}
      </div>
    </div>
  );
}
