import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Template } from "./screens/Template";
import { SobreNs } from "./screens copy 2/SobreNs";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />} />
        <Route path="/sobre" element={<SobreNs />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
