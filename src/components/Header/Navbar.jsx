
import { NavLinkStyled } from "./HeaderStyles";


const links = [
  {
    id: 1,
    title: "Inicio",
    path: "/",
  },
  {
    id: 2,
    title: "Sobre Nosotros",
    path: "/sobrenosotros",
  },
  {
    id: 3,
    title: "Productos",
    path: "/productos",
  },
  {
    id: 4,
    title: "Contacto",
    path: "/contacto",
  },
];

export const Navbar = () => {
  return (
    <ul>
      {links.map((link) => (
        <NavLinkStyled key={link.id} to={link.path}>
          {link.title}
        </NavLinkStyled>
      ))}
    </ul>
  );
};
