import styled from "styled-components";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { useEffect } from "react";

const ContainerSobreNosotros = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-top: 150px;
  height: auto;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-top: 2.5rem;
    flex-wrap: wrap;
  }

  p {
    max-width: 900px;
    text-align: justify;
    font-size: 1rem;
    line-height: 1.5rem;

    @media (max-width: 900px) {
      max-width: 700px;
      line-height: 1.2rem;
    }
    @media (max-width: 700px) {
      max-width: 400px;
      margin: 1rem;
      font-size: 0.8rem;
    }

    @media (max-width: 400px) {
      max-width: 300px;
      line-height: 1rem;
    }
  }

  h3 {
    font-size: 1.2rem;
    text-align: center;
    font-style: italic;
    margin-top: 30px;

    @media (max-width: 500px) {
      font-size: 0.8rem;
    }
  }

  img {
    width: 250px;
    height: 250px;
    border-radius: 1rem;
  }
`;

export const SobreNosotros = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza el scroll al inicio de la página
  }, []);

  return (
    <>
      <Header />
      <ContainerSobreNosotros>
        <h2>¿Quienes somos?</h2>
        <p>
          Óptica Tokio Visión está ubicada en pleno corazón de la ciudad de La
          Plata. Somos un espacio pensado para cuidar tu salud visual con
          atención personalizada, profesionalismo y estilo. Conformado por un
          equipo con amplia trayectoria, trabajamos día a día para ofrecerte
          soluciones ópticas integrales, combinando tecnología, estética y
          asesoramiento humano. Contamos con taller propio para el armado de
          anteojos, gabinete especializado en contactología, y un amplio salón
          donde podrás probar y elegir entre una gran variedad de armazones,
          cristales y lentes de contacto de primeras marcas.
        </p>
        <h3>¡Acercate y descubrí una nueva forma de ver el mundo!</h3>
        <div>
          <img src="/imagenes/Frente.jpg" alt="" />
          <img src="/imagenes/Gabinete-Contactologia.jpg" alt="" />
          <img src="/imagenes/Taller.jpg" alt="" />
        </div>
      </ContainerSobreNosotros>
      <Footer />
    </>
  );
};
