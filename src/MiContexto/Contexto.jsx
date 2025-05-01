import { useState } from "react";
import { createContext } from "react";

export const Contexto = createContext();

export const ContextoProvaider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    if(openCart) setOpenCart(false)
  };

  const handleOpenCart = () => {
    // Funcion usada para abrir y cerrar el carrito desde el icono,y ademas cerrar de CerritoClose
    setOpenCart(!openCart);
    if(openMenu) setOpenMenu(false)
  };

  return (
    <Contexto.Provider
      value={{
        openMenu,
        handleOpenMenu,
        setOpenMenu,
        openCart,
        setOpenCart,
        handleOpenCart,
      }}
    >
      {children}
    </Contexto.Provider>
  );
};
