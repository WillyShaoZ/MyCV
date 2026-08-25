import { supabase } from "../lib/supabase";
import {
  defaultProfile,
  defaultExperiences,
  defaultEducation,
  defaultProjects,
  defaultAwards,
} from "../data/defaultContent";

/** Drop the local `id` so Postgres generates a real uuid. */
const strip = ({ id, ...rest }) => rest;

/**
 * One-time import of the content that ships with the build, so the first
 * sign-in doesn't start from an empty admin. Skips any table that already
 * has rows — running it twice will not duplicate anything.
 */
export async function seedFromDefaults() {
  const report = [];

  const profile = await supabase.from("site_profile").select("id").maybeSingle();
  if (!profile.data) {
    const { error } = await supabase
      .from("site_profile")
      .upsert({ ...defaultProfile, id: 1 }, { onConflict: "id" });
    report.push(error ? `profile: ${error.message}` : "profile imported");
  } else {
    report.push("profile already set");
  }

  const sets = [
    ["experiences", defaultExperiences],
    ["education", defaultEducation],
    ["projects", defaultProjects],
    ["awards", defaultAwards],
  ];

  for (const [table, rows] of sets) {
    const { count } = await supabase
      .from(table)
      .select("id", { count: "exact", head: true });
    if (count && count > 0) {
      report.push(`${table} already has ${count}`);
      continue;
    }
    const { error } = await supabase.from(table).insert(rows.map(strip));
    report.push(error ? `${table}: ${error.message}` : `${table} imported`);
  }

  return report.join(" · ");
}
