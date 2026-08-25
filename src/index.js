import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AdminApp from "./admin/AdminApp";
import { ContentProvider } from "./lib/content";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContentProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<AdminApp />} />
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ContentProvider>
  </React.StrictMode>
);
