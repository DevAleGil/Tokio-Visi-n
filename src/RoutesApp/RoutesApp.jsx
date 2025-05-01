import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "../pages/Inicio/Inicio";
import { SobreNosotros } from "../pages/SobreNosotros/SobreNosotros";
import { Productos } from "../pages/Productos/Productos";
import { Contacto } from "../pages/Contacto/Contacto";
import { ProductoPage } from "../pages/ProductoPage/ProductoPage";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="sobrenosotros" element={<SobreNosotros />} />
        <Route path="productos" element={<Productos />} />
        <Route path="/producto/:id" element={<ProductoPage />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={"Error 404"} />
      </Routes>
    </BrowserRouter>
  );
};
