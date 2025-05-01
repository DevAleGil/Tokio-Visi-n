import * as s from "./HeroStyles.js";
import { Button } from "../UI/Button.jsx";

export const Hero = () => {
  return (
    <s.HeroSection>
      <s.HeroContainer>
        <s.HeroBox>
          <div>
            <h1>Óptica Tokio Visión</h1>
            <h4>Óptica y Contactología</h4>
            <p>
              En Óptica Tokio Visión nos dedicamos a proporcionarte soluciones
              ópticas que van más allá de la corrección visual: cada visita es
              una oportunidad para descubrir nuevas tecnologías, diseños y
              últimas tendencias. Nuestro equipo se encuentra comprometido y
              capacitado para brindarte asesoramiento personalizado, con el
              propósito de que encuentres la combinación ideal entre
              funcionalidad y moda.
            </p>
          </div>

          <Button path={"/sobrenosotros"}>Sobre Nosotros</Button>
        </s.HeroBox>
        <img src={"./imagenes/Salon-optica.jpg"} alt="" />
      </s.HeroContainer>
    </s.HeroSection>
  );
};
