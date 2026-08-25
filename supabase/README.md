# Portfolio CMS — setup

The site runs fine without any of this: with no Supabase credentials it renders
the content checked into `src/data/defaultContent.js`, and `/admin` shows a
"not configured" notice. Follow the steps below to make the content editable
from the browser.

## 1. Create the Supabase project

1. Sign up at <https://supabase.com> and create a new project (free tier is enough).
2. Wait for it to finish provisioning.

## 2. Create the tables

Open **SQL Editor** in the Supabase dashboard, paste the whole of
[`schema.sql`](./schema.sql), and run it. It creates:

- `site_profile` — name, tagline, contact links, intro, highlights (single row)
- `experiences`, `education`, `projects`, `awards`
- Row Level Security: **anyone can read, only signed-in users can write**
- A public storage bucket called `portfolio` for uploaded images

## 3. Create your login

**Authentication → Users → Add user**, with your email and a password you choose.
Confirm the email so the account is active.

Then **Authentication → Sign In / Providers → Email**: turn **"Allow new users
to sign up"** OFF. You're the only account that should ever exist.

## 4. Wire up the keys

**Project Settings → API** gives you the project URL and the `anon` public key.
The anon key is designed to be shipped in a frontend build — RLS is what
protects writes, not key secrecy.

Local development — create `.env` in the project root:

```
REACT_APP_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
REACT_APP_SUPABASE_ANON_KEY=eyJhbGciOi...
```

Vercel — **Settings → Environment Variables**, add the same two names and
values, then redeploy (CRA only reads env vars at build time, so a redeploy is
required for changes to take effect).

## 5. First sign-in

Go to `/admin`, sign in, and click **Import built-in content**. That copies the
content currently hardcoded in the repo into the database, so you start from
what the site already shows instead of an empty form. It skips any table that
already has rows, so it's safe to click twice.

From then on, edits in `/admin` are live on the next page load — no deploy.

## Notes

- **Ordering** is by the `Order` number on each entry — lower numbers first.
- **Images** upload to the `portfolio` bucket and are served from Supabase's
  CDN. You can also paste an external image URL instead.
- **Projects don't need a cover image.** The card layout is designed to look
  right without one.
- Local `/admin` only works under `npm start`. A plain static file server
  won't rewrite unknown paths to `index.html`; on Vercel `vercel.json`
  handles that.
