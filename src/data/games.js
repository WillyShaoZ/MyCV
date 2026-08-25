export const ProjectDetails = [
  {
    id: 1,
    name: 'T46 — Social Dining Platform',
    meta: 'Shanghai Intersection Effect Technology · 2026',
    tags: ['Vue 3', 'uni-app', 'FastAPI', 'PostgreSQL', 'Canvas API', 'Web Workers'],
    description:
      'A social dining product built end-to-end as full stack developer and de facto product manager. Shipped a group meal ordering flow spanning a WeChat Mini-Program client and an admin panel, with AA split payment between tablemates and refund processing enforced by business-rule validation. Built a dynamic card generation module on Canvas API with multi-threaded batch rendering via Web Workers, and moved PDF export to client-side CMYK conversion — replacing a server-side Ghostscript pipeline and cutting server load. Designed the full RBAC system, with a permission guard applied across every admin API endpoint.',
  },
  {
    id: 2,
    name: 'Construction Workforce & Timesheet Platform',
    meta: 'Commercial product · 2026',
    tags: ['Vue 3', 'uni-app', 'FastAPI', 'PostgreSQL', 'LLM pipeline', 'Railway'],
    description:
      'A workforce management product for an Australian construction company, built solo from schema to deployment. Its core is an AI parsing pipeline that turns supervisors’ free-text work logs into structured, validated payroll records — which meant building the validation and reconciliation layer around it, because payroll data cannot be trusted to a model on faith. Includes multi-tenant data isolation, role-based accounts across supervisor and worker apps, and Alembic-managed migrations.',
  },
  {
    id: 3,
    name: 'People Analytics & KPI Dashboards',
    meta: 'Aflux Interior Linings · 2026 – present',
    tags: ['Python', 'REST APIs', 'Lark / Feishu', 'Data pipeline', 'PDF reporting'],
    description:
      'Internal analytics systems for a 100+ employee construction group, built working directly with the CEO. An automated pipeline takes raw employee survey data through scoring, tier segmentation, trend analysis and cross-validation of responses, and outputs a management dashboard plus executive PDF reports. On the same foundation, a departmental performance management system on a hybrid architecture — Lark (Feishu) as the data layer with custom API-driven dashboards — approved for the Estimating department and now extending to Admin. Data table provisioning is automated through API scripts, replacing error-prone manual configuration.',
  },
];
