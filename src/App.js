import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./modules/navBar";
import Award from "./modules/award";    
import Introduction from "./modules/introduction";

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
          <ul>
          </ul>
        </Section>

        <Section id="Education" title="Education">
          <ul>
          </ul>
        </Section>

        <Section id="Projects" title="Projects">
          <p>Add your projects here…</p>
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