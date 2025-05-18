import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Template } from "./screens/Template";
import { SobreNs } from "./screensSN/SobreNs/index.ts";
import { Produtos } from "./screensPR/Produtos/index.ts";
import { Frame }  from "./screenCP/Frame/Frame.tsx";
 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />} />
        <Route path="/sobre" element={<SobreNs />} />
        <Route path="/produtos" element={<Produtos/>}/>
        <Route path="/compra" element={<Frame/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
