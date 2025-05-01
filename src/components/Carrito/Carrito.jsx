import { useDispatch, useSelector } from "react-redux";
import * as s from "./CarritoStyles";
import {
  borrarCarrito,
  finalizarCompra,
  importeTotalCompra,
} from "../../redux/carritoSlice";
import { CarritoCardProducto } from "./CarritoCardProducto";
import { Modal } from "../UI/Modal";
import { useContext, useState } from "react";

import { Contexto } from "../../MiContexto/Contexto";

export const Carrito = () => {
  const carritoProductosState = useSelector(
    (state) => state.carrito.carritoProductos
  );

  const carritoVacio = carritoProductosState.length === 0;

  const dispatch = useDispatch();
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mensajeModal, setMensajeModal] = useState("");

  const valorTotalCompra = useSelector(importeTotalCompra);

  const handleFinalizarCompra = () => {
    if (window.confirm("¿Estás seguro que quieres finalizar la compra?")) {
      dispatch(finalizarCompra());
      setMensajeModal(`Compra finalizada.`);
      
      setMostrarModal(true);

      setTimeout(() => setMostrarModal(false), 3000);
    }
  };

  const handleBorrarCarrito = () => {
    if (
      window.confirm(
        "¿Estás seguro que deseas eliminar por completo el carrito?"
      )
    ) {
      dispatch(borrarCarrito());
      setMensajeModal(`El carrito fue eliminado.`);
      setMostrarModal(true);

      setTimeout(() => setMostrarModal(false), 3000);
    }
  };

  const { handleOpenCart } = useContext(Contexto);

  return (
    <s.CarritoContainer>
      <s.CarritoClose onClick={handleOpenCart}>X</s.CarritoClose>
      <s.CarritoProductos>
        {carritoProductosState.length === 0 ? (
          <h3>No hay productos en el carro.</h3>
        ) : (
          <s.CarritoProductosLista>
            <h3>Tus productos son:</h3>
            <ul>
              {carritoProductosState.map((p) => (
                <CarritoCardProducto key={p.id} {...p} />
              ))}
            </ul>
          </s.CarritoProductosLista>
        )}
      </s.CarritoProductos>
      <s.ContainerTotal>
        <div>
          <h3>Total</h3>
          <h3>${valorTotalCompra}</h3>
        </div>
      </s.ContainerTotal>
      <s.CarritoContainerButtons>
        <button onClick={handleFinalizarCompra} disabled={carritoVacio}>
          Comprar
        </button>
        <button onClick={handleBorrarCarrito} disabled={carritoVacio}>
          Borrar Carrito
        </button>
      </s.CarritoContainerButtons>
      {mostrarModal && <Modal texto={mensajeModal} />}
    </s.CarritoContainer>
  );
};
