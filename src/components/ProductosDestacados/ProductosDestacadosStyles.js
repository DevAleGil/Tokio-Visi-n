import styled from "styled-components";
import { ButtonStyles } from "../UI/ButtonStyles.js";


export const SectionProductos = styled.section`
  background-color: var(--color-primario);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 20px;
`;

export const ProductosContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CardProducto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    width: 300px;
    height: 300px;
    border-radius: 1rem;
  }
`;

export const ButtonCard = styled(ButtonStyles)`
  width: 200px;
  margin: 20px 0;
  position: absolute;
  top: 230px;
`;
