import styled from "styled-components";

export const CarritoContainer = styled.div`
  width: 450px;
  background-color: var(--color-cuaternario);
  height: 100vh;
  z-index: 20;
  position: absolute;
  right: 0px;
  top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 1rem;
  transition: transform 0.3s ease-out;

  @media (max-width: 650px) {
    top: 110px;
  }

  @media (max-width: 500px) {
    width: 100%;
  }

  & h3 {
    color: var(--color-secundario);
    font-size: 1rem;
  }
`;

export const CarritoClose = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: var(--color-cuaternario);
  background-color: var(--color-primario);
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  position: absolute;
  right: 20px;
  top: 5px;

  &:hover {
    background-color: var(--color-secundario);
  }
`;

export const CarritoProductos = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  height: 50%;
  margin-top: 20px;
  width: 100%;
`;

export const CarritoProductosLista = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  gap: 10px;
  overflow-y: scroll;

  & ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 100%;
  }
`;

export const ContainerTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    border-top: 2px solid var(--color-secundario);
    margin-top: 20px;

    h3 {
      margin: 10px;
    }
  }
`;

export const CarritoContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin-top: 30px;

  & button {
    width: 150px;
    border: none;
    border-radius: 0.5rem;
    padding: 0.3rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    background-color: var(--color-primario);

    &:hover {
      background-color: var(--color-secundario);
    }

    :disabled {
      cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    }

    @media (max-width: 400px) {
      width: 100px;
      font-size: 0.7rem;
      padding: 0.2rem;
    }
  }
`;
