// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import TextExpanderBox from "./TextExpenderBox";
// import "./styles.css";
// import Card from "./Card";
// import EnglishStudy from "./EnglishStudy";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <Card />
//     <EnglishStudy />
//     <TextExpanderBox />
//   </StrictMode>
// );
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
