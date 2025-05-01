import styled from "styled-components";

export const CarritoItemProducto = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border: 2px solid var(--color-secundario);
  border-radius: 0.5rem;
  width: 100%;
  padding: 0.5rem;

  @media (max-width: 500px) {
    gap: 10px;
  }

  & img {
    width: 70px;
    height: 70px;
    border-radius: 0.5rem;

    @media (max-width: 500px) {
      width: 50px;
      height: 50px;
    }
    @media (max-width: 400px) {
      width: 40px;
      height: 40px;
    }
  }

  & h5 {
    color: var(--color-secundario);
    font-size: 0.6rem;
    @media (max-width: 500px) {
      font-size: 0.5rem;
    }

    @media (max-width: 400px) {
      font-size: 0.4rem;
    }
  }

  @media (max-width: 500px) {
    width: 80%;
  }
`;

export const CarritoButtonsCantidad = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  & button {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: none;
    padding: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    

    cursor: pointer;

    @media (max-width: 500px) {
      width: 15px;
      height: 15px;
    }
  }

  & span {
    color: var(--color-secundario);
    font-size: 1rem;
    @media (max-width: 500px) {
      font-size: 0.5rem;
    }
  }
`;

export const ContainerTachito = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--color-secundario);

  @media (max-width: 500px) {
    width: 20px;
    height: 20px;
  }
`;
