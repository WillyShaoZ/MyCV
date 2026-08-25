-- ============================================================
-- Portfolio CMS schema
-- Run this once in the Supabase SQL editor.
-- ============================================================

-- ---------- tables ----------

create table if not exists public.site_profile (
  id          int primary key default 1,
  name        text,
  tagline     text,
  status      text,
  location    text,
  email       text,
  phone       text,
  github      text,
  linkedin    text,
  intro       text,
  highlights  text[] default '{}',
  updated_at  timestamptz default now(),
  constraint site_profile_singleton check (id = 1)
);

create table if not exists public.experiences (
  id          uuid primary key default gen_random_uuid(),
  role        text not null,
  company     text,
  date_range  text,
  bullets     text[] default '{}',
  note        text,
  sort        int default 0
);

create table if not exists public.education (
  id          uuid primary key default gen_random_uuid(),
  degree      text not null,
  org         text,
  date_range  text,
  description text,
  sort        int default 0
);

create table if not exists public.projects (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  meta        text,
  tags        text[] default '{}',
  description text,
  cover_url   text,
  href        text,
  sort        int default 0
);

create table if not exists public.awards (
  id          uuid primary key default gen_random_uuid(),
  name_en     text not null,
  name_zh     text,
  content_en  text,
  content_zh  text,
  photo_url   text,
  sort        int default 0
);

-- ---------- row level security ----------
-- Anyone may read (the site is public). Only signed-in users may write.

alter table public.site_profile enable row level security;
alter table public.experiences  enable row level security;
alter table public.education    enable row level security;
alter table public.projects     enable row level security;
alter table public.awards       enable row level security;

do $$
declare t text;
begin
  foreach t in array array['site_profile','experiences','education','projects','awards']
  loop
    execute format('drop policy if exists "public read" on public.%I', t);
    execute format('drop policy if exists "authenticated write" on public.%I', t);

    execute format(
      'create policy "public read" on public.%I for select using (true)', t);
    execute format(
      'create policy "authenticated write" on public.%I for all
         to authenticated using (true) with check (true)', t);
  end loop;
end $$;

-- ---------- storage ----------
-- Public bucket for cover images and certificates.

insert into storage.buckets (id, name, public)
values ('portfolio', 'portfolio', true)
on conflict (id) do nothing;

drop policy if exists "portfolio public read" on storage.objects;
create policy "portfolio public read"
  on storage.objects for select
  using (bucket_id = 'portfolio');

drop policy if exists "portfolio authenticated write" on storage.objects;
create policy "portfolio authenticated write"
  on storage.objects for all
  to authenticated
  using (bucket_id = 'portfolio')
  with check (bucket_id = 'portfolio');
