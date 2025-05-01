import styled from "styled-components";

const ModalContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0px;
  right: 0px;
  padding: 1rem;
  background-color: var(--color-secundario);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  p {
    font-size: 1rem;
    color: var(--color-primario);

    @media (max-width: 600px) {
      font-size: 0.8rem;
    }
    @media (max-width: 400px) {
      font-size: 0.6rem;
    }
  }
`;

export const Modal = ({ texto }) => {
  return (
    <ModalContainer>
      <p>{texto}</p>
    </ModalContainer>
  );
};
