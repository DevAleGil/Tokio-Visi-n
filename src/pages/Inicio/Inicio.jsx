import React from "react";

import { Hero } from "../../components/Hero/Hero";
import { Informacion } from "../../components/Informacion/Informacion";
import { InfoCompras } from "../../components/InfoCompras/InfoCompras";
import { ProductosDestacados } from "../../components/ProductosDestacados/ProductosDestacados";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";


export const Inicio = () => {
  return (
    <>
      <Header />
      <Hero />
      <Informacion />
      <InfoCompras />
      <ProductosDestacados />
      <Footer />
     
    </>
  );
};
