import styled from "styled-components";

const ContainerButtonFilter = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid var(--color-secundario);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & img {
    width: 50px;
  }
`;

export const ButtonFilter = ({ imagen }) => {
  return (
    <ContainerButtonFilter>
      <img src={`/imagenes/${imagen}`} alt="" />
    </ContainerButtonFilter>
  );
};
