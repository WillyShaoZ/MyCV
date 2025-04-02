import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function Avatar(){
  return <img className="avatar" src="academic_certificate.jpg" alt="certificate"/>
}

function Intro(){
  return <div>
    <h1>Academic award for advanced maths</h1>
    <p>
      Durint the Trimester 3, 2023, I am the top student in the advanced maths. 
      For award my enthusiasm, Monash College award me the academic award for advanced maths.
      ✌️✌️✌️
    </p>
  </div>
}
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
