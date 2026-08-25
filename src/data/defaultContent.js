/**
 * Content shipped with the build. Used as-is when Supabase isn't configured,
 * and as a fallback if a table is empty or unreachable.
 */

export const defaultProfile = {
  name: "Zhen (Willy) Shao",
  tagline:
    "Full-stack engineer. I build production systems end-to-end — schema and APIs through to the interface people actually use.",
  location: "Melbourne, Australia",
  email: "willy.shao.zhen@gmail.com",
  phone: "0404 309 623",
  github: "https://github.com/WillyShaoZ",
  linkedin: "https://www.linkedin.com/in/zhen-shao-2a6652314",
  status: "Open to full-time roles — available now",
  intro:
    "I’m a Computer Science graduate from Monash University who has shipped production systems solo and inside structured teams. Vue 3 and React/TypeScript on the front end, Python/FastAPI and Node.js behind it, on PostgreSQL.\n\nAI-assisted development is how I work rather than a line on a résumé — I build with Claude and Cursor daily, and I’ve shipped LLM pipelines into production, which mostly taught me to validate what a model gives back before it reaches data that matters. I like owning a problem all the way to something running, and I’m comfortable being the person who talks to the business and then goes and builds it.",
  highlights: [
    "Vue 3 · React/TypeScript · Python/FastAPI · Node.js · PostgreSQL",
    "AI-assisted development · LLM integrations · CI/CD & cloud deployment",
    "Monash University — B.CompSci (2024 – 2026, completed)",
    "Bilingual: English & Mandarin",
  ],
};

export const defaultExperiences = [
  {
    id: "aflux",
    role: "AI & Business Systems Coordinator",
    company: "Aflux Interior Linings — Melbourne, Australia",
    date_range: "07.2026 – Present",
    bullets: [
      "Coordinate AI adoption and business-systems development for a 100+ employee construction company, working directly with the CEO on the company-wide AI Operating System roadmap",
      "Designed and delivered an approved performance management system for the Estimating department, on a hybrid architecture combining Lark (Feishu) as the data layer with custom API-driven dashboards; now extending to the Admin department",
      "Built an automated people-analytics pipeline turning employee survey data into a management dashboard and executive PDF reports — scoring, tier segmentation, trend analysis and cross-validation",
      "Automated data table provisioning through API scripts, replacing error-prone manual configuration",
    ],
    note: "",
    sort: 1,
  },
  {
    id: "shanghai",
    role: "Full Stack Developer",
    company: "Shanghai Intersection Effect Technology — Shanghai, China",
    date_range: "01.2026 – 03.2026",
    bullets: [
      "Acted as both full stack developer and de facto product manager at an early-stage startup — filtering and prioritising requirements, assessing technical feasibility, and owning features from design through deployment",
      "Built a dynamic card generation module in Vue 3 and the Canvas API, with multi-threaded batch rendering via Web Workers",
      "Moved PDF export to client-side CMYK conversion, replacing a server-side Ghostscript pipeline and cutting server load",
      "Developed a full-stack group meal ordering feature across a WeChat Mini-Program (uni-app + Vue 3) and the admin panel, with FastAPI endpoints for order creation, AA split payment and refund logic",
      "Designed and implemented a full RBAC system, with a permission guard applied across every admin API endpoint",
    ],
    note: "",
    sort: 2,
  },
  {
    id: "cyberlark",
    role: "Full Stack Developer",
    company: "Cyberlark Studio",
    date_range: "11.2024 – 11.2025",
    bullets: [
      "Developed features for a real-estate management platform in React and TypeScript, including redesigning the reminder system and fixing pagination logic in the client management module",
      "Wrote unit tests for key business logic and set up CI/CD pipelines with GitHub Actions for automated linting, testing and deployment",
      "Worked in an Agile team with weekly demos, technical syncs and structured code reviews — giving and receiving feedback to maintain code quality",
    ],
    note: "",
    sort: 3,
  },
  {
    id: "okami",
    role: "Waiter",
    company: "Okami (Buffet Restaurant) — Melbourne, Australia",
    date_range: "06.2023 – 05.2024",
    bullets: [
      "Took orders, recorded customer preferences including special dietary needs, and managed telephone bookings",
      "Handled service issues as they came up in a high-volume dining room",
    ],
    note: "Where I learned to explain things to people who don’t want a technical answer — still the most transferable skill I have",
    sort: 4,
  },
];

export const defaultEducation = [
  {
    id: "monash",
    degree: "Bachelor of Computer Science",
    org: "Monash University",
    date_range: "07.2024 – 08.2026 · Completed",
    description:
      "Coursework included software engineering, algorithms, databases, distributed systems, and web development.",
    sort: 1,
  },
  {
    id: "monash-college",
    degree: "Diploma of Information Technology",
    org: "Monash College",
    date_range: "02.2023 – 06.2024",
    description:
      "Built foundational knowledge in programming, data management, and IT systems.",
    sort: 2,
  },
];

export const defaultProjects = [
  {
    id: "t46",
    name: "T46 — Social Dining Platform",
    meta: "Shanghai Intersection Effect Technology · 2026",
    tags: ["Vue 3", "uni-app", "FastAPI", "PostgreSQL", "Canvas API", "Web Workers"],
    description:
      "A social dining product built end-to-end as full stack developer and de facto product manager. Shipped a group meal ordering flow spanning a WeChat Mini-Program client and an admin panel, with AA split payment between tablemates and refund processing enforced by business-rule validation. Built a dynamic card generation module on Canvas API with multi-threaded batch rendering via Web Workers, and moved PDF export to client-side CMYK conversion — replacing a server-side Ghostscript pipeline and cutting server load. Designed the full RBAC system, with a permission guard applied across every admin API endpoint.",
    cover_url: "",
    href: "",
    sort: 1,
  },
  {
    id: "timesheet",
    name: "Construction Workforce & Timesheet Platform",
    meta: "Commercial product · 2026",
    tags: ["Vue 3", "uni-app", "FastAPI", "PostgreSQL", "LLM pipeline", "Railway"],
    description:
      "A workforce management product for an Australian construction company, built solo from schema to deployment. Its core is an AI parsing pipeline that turns supervisors’ free-text work logs into structured, validated payroll records — which meant building the validation and reconciliation layer around it, because payroll data cannot be trusted to a model on faith. Includes multi-tenant data isolation, role-based accounts across supervisor and worker apps, and Alembic-managed migrations.",
    cover_url: "",
    href: "",
    sort: 2,
  },
  {
    id: "analytics",
    name: "People Analytics & KPI Dashboards",
    meta: "Aflux Interior Linings · 2026 – present",
    tags: ["Python", "REST APIs", "Lark / Feishu", "Data pipeline", "PDF reporting"],
    description:
      "Internal analytics systems for a 100+ employee construction group, built working directly with the CEO. An automated pipeline takes raw employee survey data through scoring, tier segmentation, trend analysis and cross-validation of responses, and outputs a management dashboard plus executive PDF reports. On the same foundation, a departmental performance management system on a hybrid architecture — Lark (Feishu) as the data layer with custom API-driven dashboards — approved for the Estimating department and now extending to Admin. Data table provisioning is automated through API scripts, replacing error-prone manual configuration.",
    cover_url: "",
    href: "",
    sort: 3,
  },
];

export const defaultAwards = [
  {
    id: "work-ethic",
    name_en: "Outstanding Student Award — Exceptional Work Ethic",
    name_zh: "优秀学生奖——勤勉敬业",
    photo_url: "/AwardForExceptionalWorkEthic.png",
    content_en:
      "During Trimester 1, 2023, I was recognised for my exceptional work ethic. Monash College presented me with the Outstanding Student Award — my first award after starting my studies in Australia.",
    content_zh:
      "在 2023 年第一学期，因勤勉敬业的学习态度，我获得了蒙纳士学院颁发的优秀学生奖。这也是我来澳大利亚开始学习后获得的第一个奖项。",
    sort: 1,
  },
  {
    id: "maths",
    name_en: "Academic Award for Advanced Maths",
    name_zh: "高等数学学术奖",
    photo_url: "/academic_certificate.jpg",
    content_en:
      "During Trimester 3, 2023, I was the top student in Advanced Maths. To recognise my enthusiasm and effort, Monash College awarded me the Academic Award for Advanced Maths.",
    content_zh:
      "在 2023 年第三学期，我在高等数学课程中表现优异、名列前茅。为表彰我的热情与努力，蒙纳士学院向我颁发了高等数学学术奖。",
    sort: 2,
  },
  {
    id: "passion",
    name_en: "Outstanding Student Award — Passion and Enthusiasm",
    name_zh: "优秀学生奖——热情与投入",
    photo_url: "/AwardForPassionAndEnthusiasm.png",
    content_en:
      "During Trimester 3, 2023, I was recognised for my passion and enthusiasm. Monash College presented me with the Outstanding Student Award.",
    content_zh:
      "在 2023 年第三学期，因课堂与活动中的热情与投入，我获得了蒙纳士学院颁发的优秀学生奖。",
    sort: 3,
  },
  {
    id: "consistency",
    name_en: "Outstanding Student Award — Consistency and Attitude",
    name_zh: "优秀学生奖——稳定表现与态度",
    photo_url: "/AwardForConsistencyAndPositiveAttitude.png",
    content_en:
      "During Trimester 1, 2024, I was recognised for my consistency and positive attitude. Monash College presented me with the Outstanding Student Award.",
    content_zh:
      "在 2024 年第一学期，因持续稳定的表现与积极的学习态度，我获得了蒙纳士学院颁发的优秀学生奖。",
    sort: 4,
  },
];

export const defaultContent = {
  profile: defaultProfile,
  experiences: defaultExperiences,
  education: defaultEducation,
  projects: defaultProjects,
  awards: defaultAwards,
};
