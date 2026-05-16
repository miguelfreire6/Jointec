import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Internal from "./pages/Internal";
import MachinePage from "./pages/Machine";
import "./i18n";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/machines/:slug" element={<MachinePage />} />
        <Route path="/internal/*" element={<Internal />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
