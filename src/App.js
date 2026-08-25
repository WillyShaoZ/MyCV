import Navbar from "./modules/navBar";
import Hero from "./modules/hero";
import Award from "./modules/award";
import Introduction from "./modules/introduction";
import Project from "./modules/projects";
import Education from "./modules/education";
import Experience from "./modules/experience";
import { useContent } from "./lib/content";

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      <div className="section__body">{children}</div>
    </section>
  );
}

export default function App() {
  const { content, loading } = useContent();

  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />

        {loading ? <p className="loading">Loading…</p> : null}

        <Section id="Introduction" title="Introduction">
          <Introduction />
        </Section>

        <Section id="Experience" title="Experience">
          <Experience />
        </Section>

        <Section id="Education" title="Education">
          <Education />
        </Section>

        <Section id="Projects" title="Projects">
          <Project />
        </Section>

        <Section id="Awards" title="Awards">
          <Award />
        </Section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} {content.profile?.name}</span>
          <span>Built with React</span>
        </footer>
      </main>
    </>
  );
}
