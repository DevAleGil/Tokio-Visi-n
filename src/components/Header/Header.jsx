import { useContext, useEffect } from "react";
import { Parrafo } from "../UI/Parrafo";
import * as s from "./HeaderStyles";
import { Logo } from "./Logo/Logo";
import { Navbar } from "./Navbar";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { Contexto } from "../../MiContexto/Contexto";
import { useLocation } from "react-router-dom";
import { Carrito } from "../Carrito/Carrito";
import { useSelector } from "react-redux";
import { unidadesTotalProductos } from "../../redux/carritoSlice";

export const Header = () => {
  const { openMenu, handleOpenMenu, setOpenMenu, openCart, handleOpenCart } =
    useContext(Contexto);

  const location = useLocation();

  useEffect(() => {
    if (openMenu) {
      setOpenMenu(false);
    }
  }, [location]);

  const totalUniadesProductos = useSelector(unidadesTotalProductos);

  return (
    <s.HeaderContainer>
      <Parrafo>
        Lunes a Viernes de 9 a 17hs y Sábados de 9 a 13hs - Diagonal 73 Nº 1627,
        La Plata.
      </Parrafo>
      <s.HeaderPrincipal>
        <div>
          <s.IconMobile>
            <BiMenuAltLeft onClick={handleOpenMenu} />
          </s.IconMobile>

          <Logo />
        </div>

        <s.HeaderBox>
          <s.HeaderNavbar openMenu={openMenu}>
            <Navbar />
          </s.HeaderNavbar>

          <s.CarritoIcon>
            <FaCartShopping onClick={handleOpenCart} />
            <span>{totalUniadesProductos}</span>
          </s.CarritoIcon>
        </s.HeaderBox>
      </s.HeaderPrincipal>

      <s.CarritoBox openCart={openCart}>
        <Carrito />
      </s.CarritoBox>
    </s.HeaderContainer>
  );
};
