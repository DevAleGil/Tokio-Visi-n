
import { useNavigate } from "react-router-dom";
import * as s from "./InformacionStyles";

export const Informacion = () => {

  let navigate = useNavigate()

  return (
    <>
      <s.InformacionContainer>
        <h3>TRABAJAMOS CON TODAS LAS OBRAS SOCIALES.</h3>
        <p>
          Consultanos y te asesoramos sobre los requisitos y cobertura de tu
          obra social o prepaga.
        </p>
        <s.ButtonInformacion onClick={() => navigate('/contacto')}>Contactanos</s.ButtonInformacion>
      </s.InformacionContainer>
    </>
  );
};
