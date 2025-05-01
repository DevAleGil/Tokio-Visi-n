import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import styled from "styled-components";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Modal } from "../../components/UI/Modal";

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  width: 100%;
  gap: 50px;
  padding: 1rem;

  h2 {
    font-size: 1.5rem;
  }
`;

const FormBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 10px;
  max-width: 700px;
  height: 600px;
  width: 100%;
  background-color: var(--color-cuaternario);
  border-radius: 1rem;
  padding: 1rem;

  @media (max-width: 750px) {
    flex-direction: column;
    height: auto;
    max-width: 300px;
    align-items: center;
  }
`;

const Formulario = styled(Form)`
  flex-direction: column;
  display: flex;
  gap: 20px;
  padding: 1rem;
  border-radius: 1rem;
  max-width: 350px;
  width: 100%;
  height: 550px;

  div {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5px;

    input {
      width: 100%;
      padding: 0.5rem;
    }
  }

  textarea {
    border: 1px solid var(--color-primario);
    padding: 0.5rem;
  }
`;

const ErrorMsg = styled.div`
  color: var(--color-secundario);
  font-size: 0.8rem;
`;

const BtnForm = styled.button`
  width: 100%;
  padding: 0.5rem;
  border: none;
  background-color: var(--color-secundario);
  color: var(--color-cuaternario);
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primario);
  }
`;

const ContainerIframe = styled.div`
  max-width: 350px;
  height: 550px;
  padding: 1rem;
  iframe {
    height: 100%;
    width: 100%;
  }

  @media (max-width: 750px) {
    height: 350px;
  }
`

const validationSchema = Yup.object({
  nombre: Yup.string().required("Campo obligatorio."),
  apellido: Yup.string().required("Campo obligatorio."),
  email: Yup.string().email("Email inválido.").required("Campo obligatorio."),
  telefono: Yup.number().required("Campo obligatorio."),
  asunto: Yup.string().required("Campo obligatorio."),
  textarea: Yup.string().max("Máximo de 300 caracteres.").notRequired(),
});

export const Contacto = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mensajeModal, setMensajeModal] = useState("");

  const initialValues = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    asunto: "",
    textarea: "",
  };

  const handleSumbit = ({ resetForm }) => {
    resetForm();
    setMensajeModal(`Formulario enviado.`);
    setMostrarModal(true);

    setTimeout(() => setMostrarModal(false), 3000);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza el scroll al inicio de la página
  }, []);
  return (
    <>
      <Header />
      <ContainerForm>
        <h2>Contáctanos</h2>
        <FormBox>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSumbit}
          >
            <Formulario>
              <div>
                <Field type="text" name="nombre" placeholder="Nombre" />
                <ErrorMessage name="nombre" component={ErrorMsg} />
              </div>
              <div>
                <Field type="text" name="apellido" placeholder="Apellido" />
                <ErrorMessage name="apellido" component={ErrorMsg} />
              </div>

              <div>
                <Field
                  type="number"
                  name="telefono"
                  placeholder="Numero de teléfono"
                />
                <ErrorMessage name="telefono" component={ErrorMsg} />
              </div>

              <div>
                <Field type="email" name="email" placeholder="Email" />
                <ErrorMessage name="email" component={ErrorMsg} />
              </div>

              <div>
                <Field type="texto" name="asunto" placeholder="Asunto" />
                <ErrorMessage name="asunto" component={ErrorMsg} />
              </div>

              <Field
                as="textarea"
                name="textarea"
                placeholder="Cuéntanos en que podemos ayudarte..."
                rows="10"
                cols="10"
              ></Field>
              <BtnForm>Enviar</BtnForm>
            </Formulario>
          </Formik>
          <ContainerIframe>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3271.4143692110392!2d-57.95411472065431!3d-34.9211434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1744576954760!5m2!1ses-419!2sar"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </ContainerIframe>
        </FormBox>
      </ContainerForm>
      {mostrarModal && <Modal texto={mensajeModal} />}
      <Footer />
    </>
  );
};
