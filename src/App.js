import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./modules/navBar";
import Award from "./modules/award";    
import Introduction from "./modules/introduction";
import Project from "../src/modules/projects";
import Education from "../src/modules/education";
import Experience from "../src/modules/experience";

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      <div className="section__body">{children}</div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
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
          <Project/>
        </Section>

        <Section id="Awards" title="Awards">
          <Award /> 
        </Section>
      </main>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);