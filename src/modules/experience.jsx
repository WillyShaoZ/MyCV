export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="experience-item">
        <h3>
          AI &amp; Business Systems Coordinator — Aflux Interior Linings,
          Melbourne, Australia
        </h3>
        <p className="date">07.2026 – Present</p>
        <ul>
          <li>
            Coordinate AI adoption and business-systems development for a 100+
            employee construction company, working directly with the CEO on the
            company-wide AI Operating System roadmap
          </li>
          <li>
            Designed and delivered an approved performance management system for
            the Estimating department, on a hybrid architecture combining Lark
            (Feishu) as the data layer with custom API-driven dashboards; now
            extending to the Admin department
          </li>
          <li>
            Built an automated people-analytics pipeline turning employee survey
            data into a management dashboard and executive PDF reports —
            scoring, tier segmentation, trend analysis and cross-validation
          </li>
          <li>
            Automated data table provisioning through API scripts, replacing
            error-prone manual configuration
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>
          Full Stack Developer — Shanghai Intersection Effect Technology,
          Shanghai, China
        </h3>
        <p className="date">01.2026 – 03.2026</p>
        <ul>
          <li>
            Acted as both full stack developer and de facto product manager at
            an early-stage startup — filtering and prioritising requirements,
            assessing technical feasibility, and owning features from design
            through deployment
          </li>
          <li>
            Built a dynamic card generation module in Vue 3 and the Canvas API,
            with multi-threaded batch rendering via Web Workers
          </li>
          <li>
            Moved PDF export to client-side CMYK conversion, replacing a
            server-side Ghostscript pipeline and cutting server load
          </li>
          <li>
            Developed a full-stack group meal ordering feature across a WeChat
            Mini-Program (uni-app + Vue 3) and the admin panel, with FastAPI
            endpoints for order creation, AA split payment and refund logic
          </li>
          <li>
            Designed and implemented a full RBAC system, with a permission guard
            applied across every admin API endpoint
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Full Stack Developer — Cyberlark Studio</h3>
        <p className="date">11.2024 – 11.2025</p>
        <ul>
          <li>
            Developed features for a real-estate management platform in React
            and TypeScript, including redesigning the reminder system and fixing
            pagination logic in the client management module
          </li>
          <li>
            Wrote unit tests for key business logic and set up CI/CD pipelines
            with GitHub Actions for automated linting, testing and deployment
          </li>
          <li>
            Worked in an Agile team with weekly demos, technical syncs and
            structured code reviews — giving and receiving feedback to maintain
            code quality
          </li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Waiter — Okami (Buffet Restaurant), Melbourne, Australia</h3>
        <p className="date">06.2023 – 05.2024</p>
        <ul>
          <li>
            Took orders, recorded customer preferences including special dietary
            needs, and managed telephone bookings
          </li>
          <li>
            Handled service issues as they came up in a high-volume dining room
          </li>
        </ul>
        <p>
          <em>
            Where I learned to explain things to people who don’t want a
            technical answer — still the most transferable skill I have
          </em>
        </p>
      </div>
    </section>
  );
}
