import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

import * as s from "./ProductoPageStyles";
import { useDispatch, useSelector } from "react-redux";
import { agregarAlCarrito } from "../../redux/carritoSlice";
import { Button } from "../../components/UI/Button";
import { useEffect, useState } from "react";
import { Modal } from "../../components/UI/Modal";

export const ProductoPage = () => {
  const { id } = useParams();

  const { name, price, descripcion, imagenproducto } = useSelector((state) =>
    state.productos.productos.find((p) => p.id === parseInt(id))
  );

  const dispatch = useDispatch();

  const [mostrarModal, setMostrarModal] = useState(false);
  const [mensajeModal, setMensajeModal] = useState("");

  const handleAgregarAlCarrito = () => {
    dispatch(agregarAlCarrito({ name, price, imagenproducto, id }));

    setMensajeModal(`Agregaste al carrito el producto ${name} `);
    setMostrarModal(true);

    setTimeout(() => setMostrarModal(false), 3000);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza el scroll al inicio de la página
  }, []);

  return (
    <>
      <Header />
      <s.ProductoPageContainer>
        <h1>{name}</h1>
        <s.ProductoPegeInfo>
          <s.ProductoPageImg>
            <img src={`/productos-img/${imagenproducto}`} alt={name} />
            <h3>Precio ${price}</h3>
          </s.ProductoPageImg>
          <s.ProductoPageDescription>
            <p>{descripcion}</p>
            <s.ProductoPegeButtons>
              <button onClick={handleAgregarAlCarrito}>
                Agregar al carrito
              </button>

              <Button path={"/productos"}>Volver a Productos</Button>
            </s.ProductoPegeButtons>
          </s.ProductoPageDescription>
        </s.ProductoPegeInfo>
      </s.ProductoPageContainer>

      {mostrarModal && <Modal texto={mensajeModal} />}

      <Footer />
    </>
  );
};
