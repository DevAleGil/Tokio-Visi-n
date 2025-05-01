import styled from "styled-components";

const ParrafoContainer = styled.div`
  background-color: var(--color-cuaternario);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  height: 40px;


  p {
    color: var(--color-primario);
    font-size: 1rem;
    text-align: center;

  }

  @media (max-width: 720px){
    padding: 5px;
    p{
      font-size: .7rem;
    }
  }

  @media (max-width: 500px){
    
    p{
      font-size: .6rem;
    }
  }
`;

export const Parrafo = ({ children }) => {
  return (
    <ParrafoContainer>
      <p>{children}</p>
    </ParrafoContainer>
  );
};
