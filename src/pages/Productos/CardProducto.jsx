import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { agregarAlCarrito } from "../../redux/carritoSlice";
import { Link } from "react-router-dom";
import { Modal } from "../../components/UI/Modal";
const CardProductoContainer = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 250px;
  height: 350px;
  height: auto;
  border: 2px solid black;
  padding: 0.5rem;

  @media (max-width: 830px) {
    width: 200px;
  }
  @media (max-width: 450px) {
    width: 150px;
    height: 250px;
  }

  & h4 {
    font-size: 1rem;

    @media (max-width: 830px) {
      font-size: 0.8rem;
    }

    @media (max-width: 450px) {
      font-size: 0.7rem;
    }
  }

  & img {
    width: 100%;
    height: 50%;
    margin-bottom: 10px;

    @media (max-width: 450px) {
        height: 50%;
      }
  }

  & span {
    font-size: 1rem;
    font-weight: bold;
    margin-top: 5px;

    @media (max-width: 830px) {
      font-size: 0.8rem;
    }
    @media (max-width: 450px) {
      font-size: 0.7rem;
    }
  }

  & div {
    flex-direction: column;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 90%;
    margin-top: 20px;

    @media (max-width: 450px) {
      gap: 5px;
      margin-top: 15px;
    }

    & button {
      width: 100%;
      padding: 8px;
      border-radius: 1rem;
      font-size: 15px;
      color: var(--color-primario);
      background-color: var(--color-cuaternario);
      border: none;
      cursor: pointer;
      &:hover {
        background-color: var(--color-secundario);
      }

      @media (max-width: 830px) {
        padding: 6px;
        font-size: 12px;
      }

      @media (max-width: 450px) {
        font-size: 10px;
      }
    }
  }
`;

const ButtonVerMas = styled(Link)`
  padding: 8px;
  background-color: var(--color-cuaternario);
  border-radius: 1rem;
  width: 100%;
  text-align: center;
  color: var(--color-primario);
  cursor: pointer;
  font-size: 15px;

  @media (max-width: 830px) {
    padding: 6px;
    font-size: 12px;
  }

  @media (max-width: 450px) {
    font-size: 10px;
  }

  &:hover {
    background-color: var(--color-secundario);
  }
`;

export const CardProducto = ({ name, price, imagenproducto, id }) => {
  const dispatch = useDispatch();

  const [mostrarModal, setMostrarModal] = useState(false);
  const [mensajeModal, setMensajeModal] = useState("");

  const handleAgregarAlCarrito = () => {
    dispatch(agregarAlCarrito({ name, price, imagenproducto, id }));

    setMensajeModal(`Agregaste al carrito el producto ${name} `);
    setMostrarModal(true);

    setTimeout(() => setMostrarModal(false), 3000);
  };

  return (
    <>
      <CardProductoContainer>
        <img src={`/productos-img/${imagenproducto}`} alt={name} />
        <h4>{name}</h4>
        <span>${price}</span>
        <div>
          <ButtonVerMas to={`/producto/${id}`}>Ver mas</ButtonVerMas>
          <button onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
        </div>
      </CardProductoContainer>
      {mostrarModal && <Modal texto={mensajeModal} />}
    </>
  );
};
