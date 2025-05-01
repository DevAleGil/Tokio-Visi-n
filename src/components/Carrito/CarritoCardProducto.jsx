import { useDispatch } from "react-redux";
import * as s from "./CarritoCardProductoStyles";
import { FaTrashAlt } from "react-icons/fa";
import {
  disminuirCantidad,
  eliminarProductoCarrito,
  incrementarCantidad,
} from "../../redux/carritoSlice";
import { useState } from "react";
import { Modal } from "../UI/Modal";

export const CarritoCardProducto = ({
  name,
  imagenproducto,
  cantidad,
  price,
  id,
}) => {
  const dispatch = useDispatch();

  const [mostrarModal, setMostrarModal] = useState(false);
  const [mensajeModal, setMensajeModal] = useState("");

  const handleIncrementarUnidad = () => {
    dispatch(incrementarCantidad(id));

    setMensajeModal(`Agregaste una unidad de ${name} al carrito`);
    setMostrarModal(true);

    setTimeout(() => setMostrarModal(false), 3000);
  };

  const handleDecrementarUnidad = () => {
    dispatch(disminuirCantidad(id));

    setMensajeModal(`Eliminaste una unidad de ${name} del carrito`);
    setMostrarModal(true);

    setTimeout(() => setMostrarModal(false), 3000);
  };

  const handleEliminarProductoCarrito = () => {
    //Aca el orden debo alterarlo: debo mostrar el modal antes del dispatch => por el concepto del desmonte de los componentes. Primero muestor mdoal luego elimino y se desmonta.

    if (window.confirm("¿Desea eliminar el producto del carro?")) {
      setMensajeModal(`${name} fue eliminado del carrito`);
      setMostrarModal(true);

      setTimeout(() => {
        dispatch(eliminarProductoCarrito(id));
        setMostrarModal(false);
      }, 2000);
    }
  };

  return (
    <>
      <s.CarritoItemProducto>
        <img src={`/productos-img/${imagenproducto}`} alt={name} />
        <h5>{name}</h5>

        <s.CarritoButtonsCantidad>
          <button onClick={handleIncrementarUnidad}>+</button>
          <span>{cantidad}</span>
          <button onClick={handleDecrementarUnidad}>-</button>
          <span>${price}</span>
        </s.CarritoButtonsCantidad>
        <s.ContainerTachito onClick={handleEliminarProductoCarrito}>
          <FaTrashAlt />
        </s.ContainerTachito>
      </s.CarritoItemProducto>
      {mostrarModal && <Modal texto={mensajeModal} />}
    </>
  );
};
