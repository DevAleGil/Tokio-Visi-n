import * as s from "./ProductosDestacadosStyles.js";

import { CardProductoDestacado } from "./CardProductoDestacado.jsx";
import { ListaDestacados } from "../data/ListaDestacados.js";

export const ProductosDestacados = () => {
  return (
    <>
      <s.SectionProductos>
        <h2>Productos Destacados</h2>
        <s.ProductosContainer>
          {ListaDestacados.map((productodestacado) => (
            <CardProductoDestacado key={productodestacado.id} {...productodestacado} />
          ))}
        </s.ProductosContainer>
      </s.SectionProductos>
    </>
  );
};
