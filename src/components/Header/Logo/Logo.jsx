import styled from "styled-components";

const ContainerLogo = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width: 100%;
    height: 100%;
  }

  @media (max-width:650px){
    width: 60px;
    height: 60px;
  }
`;

export const Logo = () => {
  return (
    <ContainerLogo>
      <img src="/imagenes/Logo.jpg" />
    </ContainerLogo>
  );
};
