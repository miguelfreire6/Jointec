import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import EquipmentPopup from "./components/EquipmentPopup";
import FefpebPopup from "./components/FefpebPopup";
import AdminLeadsPage from "./pages/Admin/Leads";
import AboutPage from "./pages/About";
import CasesPage from "./pages/Cases";
import CapePage from "./pages/Cape";
import CapeCategoryPage from "./pages/Cape/Category";
import Internal from "./pages/Internal";
import MachinePage from "./pages/Machine";
import MachinesPage from "./pages/Machines";
import NewsPage from "./pages/News";
import FefpebNewsPage from "./pages/News/Fefpeb";
import "./i18n";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FefpebPopup />
      <EquipmentPopup />
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/home" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/cape" element={<CapePage />} />
        <Route path="/cape/:categorySlug" element={<CapeCategoryPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/fefpeb-2026" element={<FefpebNewsPage />} />
        <Route path="/machines" element={<MachinesPage />} />
        <Route path="/machines/klotsproduktionslinje" element={<Navigate to="/machines/block-production-line" replace />} />
        <Route path="/machines/plastning-nonstop" element={<Navigate to="/machines/nonstop-topfoil-pallet" replace />} />
        <Route path="/machines/topfoil-pallet" element={<Navigate to="/machines/nonstop-topfoil-pallet" replace />} />
        <Route path="/machines/:slug" element={<MachinePage />} />
        <Route path="/internal/*" element={<Internal />} />
        <Route path="/admin/leads" element={<AdminLeadsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
