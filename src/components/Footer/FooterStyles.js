import styled from "styled-components";

export const SectionFooter = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-secundario);
  margin-top: 50px;
`;

export const FooterPricipal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
  flex-wrap: wrap;
  max-width: 1200px;

  @media (max-width: 650px) {
  }
`;

export const FooterContactos = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 300px;
  margin-top: 1rem;

  @media (max-width: 650px) {
    width: 250px;
  }

  hr {
    border: 1px solid var(--color-primario);
    width: 100%;
  }

  h3 {
    font-size: 1.2rem;
    color: var(--color-cuaternario);
    margin: 10px 0;

    @media (max-width: 650px) {
      font-size: 1rem;
    }
  }

  li,
  a {
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--color-primario);
    padding: 4px;

    @media (max-width: 650px) {
      font-size: 0.8rem;
    }
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 300px;

  @media (max-width: 650px) {
    width: 250px;
  }

  h3 {
    font-size: 1.2rem;
    color: var(--color-cuaternario);
    margin: 10px 0;

    @media (max-width: 650px) {
      font-size: 1rem;
    }
  }

  p {
    color: var(--color-primario);
    @media (max-width: 650px) {
      font-size: 0.8rem;
    }
  }
`;

export const FooterData = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 300px;
  align-items: start;

  @media (max-width: 650px) {
    width: 250px;
  }

  ul {
    display: flex;
    flex-direction: column;

    gap: 0.5rem;
    padding: 0;
  }
  li {
    font-size: 1rem;
    color: var(--color-primario);
    @media (max-width: 650px) {
      font-size: 0.8rem;
    }
  }

  h3 {
    font-size: 1.2rem;
    color: var(--color-cuaternario);
    margin: 10px 0;
    @media (max-width: 650px) {
      font-size: 1rem;
    }
  }
`;
export const FooterArticle = styled.article`
  background-color: var(--color-3);
  text-align: center;
  width: 100%;
  margin-top: 20px;
  padding: 10px;

  p {
    color: var(--color-2);
    font-size: 1rem;
  }
`;
