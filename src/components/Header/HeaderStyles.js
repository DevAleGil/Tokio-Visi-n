import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 10;
`;

export const HeaderPrincipal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-secundario);
  padding: 0.5rem;
  height: 90px;

  @media (max-width: 650px) {
    height: 70px;
  }

  img {
    border-radius: 50%;
    width: 80px;
  }

  div {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`;

export const CarritoIcon = styled.div`
  font-size: 32px;
  margin-right: 4rem;
  position: relative;
  cursor: pointer;

  span {
    width: 20px;
    height: 20px;
    background-color: var(--color-secundario);
    border-radius: 50%;
    position: absolute;
    top: 15px;
    left: 30px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    color: var(--color-cuaternario);
  }
`;

export const IconMobile = styled.div`
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;
  svg {
    color: var(--color-cuaternario);
    display: none;
    @media (max-width: 850px) {
      display: block;
    }
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-secundario);
  height: 70px;
`;

export const HeaderNavbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
 

  @media (max-width: 1100px) {
    max-width: 700px;
  }
  @media (max-width: 850px) {
    border: none;
    background-color: var(--color-cuaternario);
    display: ${({ openMenu }) => (openMenu ? "flex" : "none")};
    top: 130px;
    left: 0;
    position: absolute;
    width: 300px;
    
    
  }

  @media (max-width: 650px) {
    width: 100vw;
    z-index: 50;
    top: 110px;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 30px;

    @media (max-width: 850px) {
      flex-direction: column;
      height: 100vh;
      justify-content: flex-start;
      margin-top: 150px;
      
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: var(--color-cuaternario);
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    color: var(--color-primario);
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 850px) {
    color: var(--color-secundario);
  }
`;

export const CarritoBox = styled.div`
  display: ${({ openCart }) => (openCart ? "flex" : "none")};
`;
