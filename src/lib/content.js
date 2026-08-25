import { createContext, useContext, useEffect, useState } from "react";
import { supabase, isSupabaseConfigured } from "./supabase";
import { defaultContent } from "../data/defaultContent";

export const TABLES = {
  experiences: { table: "experiences", label: "Experience" },
  education: { table: "education", label: "Education" },
  projects: { table: "projects", label: "Projects" },
  awards: { table: "awards", label: "Awards" },
};

/** Pull every content table in parallel; fall back to defaults per section. */
export async function fetchContent() {
  if (!isSupabaseConfigured) return { ...defaultContent, source: "static" };

  const [profile, experiences, education, projects, awards] = await Promise.all([
    supabase.from("site_profile").select("*").eq("id", 1).maybeSingle(),
    supabase.from("experiences").select("*").order("sort"),
    supabase.from("education").select("*").order("sort"),
    supabase.from("projects").select("*").order("sort"),
    supabase.from("awards").select("*").order("sort"),
  ]);

  const pick = (res, fallback) =>
    res.error || !res.data || (Array.isArray(res.data) && res.data.length === 0)
      ? fallback
      : res.data;

  return {
    profile: pick(profile, defaultContent.profile),
    experiences: pick(experiences, defaultContent.experiences),
    education: pick(education, defaultContent.education),
    projects: pick(projects, defaultContent.projects),
    awards: pick(awards, defaultContent.awards),
    source: "supabase",
  };
}

const ContentContext = createContext({
  content: defaultContent,
  loading: false,
  reload: () => {},
});

export function ContentProvider({ children }) {
  const [content, setContent] = useState(defaultContent);
  const [loading, setLoading] = useState(isSupabaseConfigured);

  const load = () => {
    if (!isSupabaseConfigured) return;
    setLoading(true);
    fetchContent()
      .then(setContent)
      .catch(() => setContent(defaultContent))
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  return (
    <ContentContext.Provider value={{ content, loading, reload: load }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  return useContext(ContentContext);
}
