import React, { useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import styled from "styled-components";
import { CardProducto } from "./CardProducto";
import { useDispatch, useSelector } from "react-redux";
import { setSeleccionarCategoria } from "../../redux/categoriasSlice";

const SectionProductos = styled.section`
  min-height: 100vh;
  height: auto;
  margin-top: 150px;
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 30px;
`;

const ContainerFilterButtons = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  flex-wrap: wrap;
  margin-bottom: -30px;

  @media (max-width: 600px) {
    gap: 5px;
  }
`;

const FiltroBox = styled.div`
  background-color: var(--color-primario);
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  width: 100px;
  height: 150px;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 50px;
    height: 120px;
  }

  @media (max-width: 450px) {
    width: 40px;
    height: 100px;
  }



  & span {
    font-size: 1rem;
    color: var(--color-secundario);
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s ease;
    text-align: center;

    @media (max-width: 600px) {
      font-size: 0.6rem;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;

const FiltroBoxIcono = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid var(--color-secundario);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: var(--color-primario);

  @media (max-width: 600px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 450px) {
    width: 40px;
    height: 40px;
  }

  & img {
    width: 70%;
    height: 70%;
  }
`;

const ContainerProductos = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Productos = () => {
  const dispatch = useDispatch();
  const productosState = useSelector((state) => state.productos.productos);
  const categoriasState = useSelector((state) => state.categorias.categorias);

  const categoriaSeleccionadaState = useSelector(
    (state) => state.categorias.categoriaSeleccionada
  );

  const productosFiltrados =
    categoriaSeleccionadaState === "todos"
      ? productosState
      : productosState.filter(
          (producto) => producto.category === categoriaSeleccionadaState
        );

  const handleCategoria = (categoria) => {
    dispatch(setSeleccionarCategoria(categoria));
  };

  useEffect(() => {
    dispatch(setSeleccionarCategoria("todos")); // cuando se monta Productos, se setea el filtro 'todos'
    window.scrollTo(0, 0); // Desplaza el scroll al inicio de la página
  }, []);

  return (
    <>
      <Header />
      <SectionProductos>
        <h2>Productos</h2>

        <ContainerFilterButtons>
          {categoriasState.map((categoria) => (
            <FiltroBox>
              <FiltroBoxIcono
                key={categoria.id}
                onClick={() => handleCategoria(categoria.categoria)}
                style={{
                  backgroundColor:
                    categoriaSeleccionadaState === categoria.categoria
                      ? "red"
                      : "white",
                }}
              >
                <img src={`/imagenes/${categoria.imagen}`} alt="" />
              </FiltroBoxIcono>
              <span>{categoria.nombre}</span>
            </FiltroBox>
          ))}
        </ContainerFilterButtons>
        <ContainerProductos>
          {productosFiltrados.map((producto) => (
            <CardProducto key={producto.id} {...producto} />
          ))}
        </ContainerProductos>
      </SectionProductos>
      <Footer />
    </>
  );
};
