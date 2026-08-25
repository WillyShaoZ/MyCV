/**
 * Field descriptors that drive the admin forms.
 * type: text | textarea | list | image | number
 */

export const profileFields = [
  { key: "name", label: "Name", type: "text" },
  { key: "tagline", label: "Tagline", type: "textarea", rows: 2 },
  { key: "status", label: "Status pill", type: "text", hint: "e.g. Open to full-time roles — available now. Leave empty to hide." },
  { key: "location", label: "Location", type: "text" },
  { key: "email", label: "Email", type: "text" },
  { key: "phone", label: "Phone", type: "text" },
  { key: "github", label: "GitHub URL", type: "text" },
  { key: "linkedin", label: "LinkedIn URL", type: "text" },
  { key: "intro", label: "Introduction", type: "textarea", rows: 10, hint: "Separate paragraphs with a blank line." },
  { key: "highlights", label: "Highlights", type: "list", hint: "One per line." },
];

export const collections = {
  projects: {
    table: "projects",
    label: "Projects",
    titleKey: "name",
    fields: [
      { key: "name", label: "Title", type: "text" },
      { key: "meta", label: "Context line", type: "text", hint: "e.g. Aflux Interior Linings · 2026 – present" },
      { key: "tags", label: "Tech tags", type: "list", hint: "One per line." },
      { key: "description", label: "Description", type: "textarea", rows: 8 },
      { key: "cover_url", label: "Cover image", type: "image", hint: "Optional — cards look fine without one." },
      { key: "href", label: "Link", type: "text", hint: "Optional. Makes the whole card clickable." },
      { key: "sort", label: "Order", type: "number" },
    ],
    blank: { name: "New project", meta: "", tags: [], description: "", cover_url: "", href: "", sort: 99 },
  },
  experiences: {
    table: "experiences",
    label: "Experience",
    titleKey: "role",
    fields: [
      { key: "role", label: "Role", type: "text" },
      { key: "company", label: "Company / location", type: "text" },
      { key: "date_range", label: "Dates", type: "text", hint: "e.g. 07.2026 – Present" },
      { key: "bullets", label: "Bullet points", type: "list", hint: "One per line." },
      { key: "note", label: "Closing note", type: "textarea", rows: 2, hint: "Optional italic line." },
      { key: "sort", label: "Order", type: "number" },
    ],
    blank: { role: "New role", company: "", date_range: "", bullets: [], note: "", sort: 99 },
  },
  education: {
    table: "education",
    label: "Education",
    titleKey: "degree",
    fields: [
      { key: "degree", label: "Qualification", type: "text" },
      { key: "org", label: "Institution", type: "text" },
      { key: "date_range", label: "Dates", type: "text" },
      { key: "description", label: "Description", type: "textarea", rows: 3 },
      { key: "sort", label: "Order", type: "number" },
    ],
    blank: { degree: "New qualification", org: "", date_range: "", description: "", sort: 99 },
  },
  awards: {
    table: "awards",
    label: "Awards",
    titleKey: "name_en",
    fields: [
      { key: "name_en", label: "Title (EN)", type: "text" },
      { key: "name_zh", label: "标题（中文）", type: "text" },
      { key: "photo_url", label: "Certificate image", type: "image" },
      { key: "content_en", label: "Description (EN)", type: "textarea", rows: 4 },
      { key: "content_zh", label: "描述（中文）", type: "textarea", rows: 4 },
      { key: "sort", label: "Order", type: "number" },
    ],
    blank: { name_en: "New award", name_zh: "", photo_url: "", content_en: "", content_zh: "", sort: 99 },
  },
};
