import styled from "styled-components";

export const ProductoPageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 150px;

  @media (max-width: 500px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const ProductoPegeInfo = styled.div`
  display: flex;
  justify-content: center;
  max-width: 900px;
  width: 100%;
  gap: 50px;
  margin-top: 50px;

 

  @media (max-width: 750px) {
    gap: 20px;
  }
`;

export const ProductoPageImg = styled.div`
  width: 40%;

  & img {
    width: 100%;
    border-radius: 1rem;
  }

  & h3 {
    margin-top: 30px;

    @media (max-width: 500px) {
      font-size: 0.9rem;
    }
  }
`;

export const ProductoPageDescription = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;

  @media (max-width: 750px) {
    width: 40%;
    gap: 1rem;
  }
  @media (max-width: 500px) {
    
    gap: .5rem;
  }
  

  & p {
    color: var(--color-cuaternario);
    font-size: 1.2rem;
    max-width: 90%;

    @media (max-width: 750px) {
      font-size: 0.8rem;
    }

    @media (max-width: 500px) {
      font-size: 0.6rem;
    }
  }
`;

export const ProductoPegeButtons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  @media (max-width: 750px) {
    gap: 0.5rem;
    
  }

  @media (max-width: 550px) {
      flex-direction: column;
      gap:.3rem;
    }

  button {
    border: none;
    border-radius: 1rem;
    padding: 0.8rem;
    background-color: var(--color-cuaternario);
    color: var(--color-primario);
    font-weight: bold;
    cursor: pointer;
    font-size: 0.8rem;

    @media (max-width: 750px) {
      padding: 0.5rem;
      font-size: 0.5rem;
    }
    @media (max-width: 500px) {
      padding: 0.4rem;
      font-size: 0.4rem;
    }
   

    &:hover {
      background-color: var(--color-secundario);
    }
  }
`;
