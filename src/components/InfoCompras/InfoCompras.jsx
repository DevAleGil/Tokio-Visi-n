import styled from "styled-components";
import { FaTruck } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 50px;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }

  div {
    border-bottom: 2px solid var(--color-cuaternario);
    border-top: 2px solid var(--color-cuaternario);
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 300px;

 
  }
`;

export const InfoCompras = () => {
  return (
    <Container>
      <div>
        <FaTruck />
        <h4>ENVÍOS GRATIS</h4>
        <span>Compras superiores a $90.000</span>
      </div>
      <div>
        <FaCreditCard />
        <h4>HASTA 3 CUOTAS SIN INTERES</h4>
        <span>Con todas las tarjetas</span>
      </div>
      <div>
        <GiPadlock />
        <h4>COMPRÁ CON SEGURIDAD</h4>
        <span>Todos tus datos están protegidos</span>
      </div>
    </Container>
  );
};


