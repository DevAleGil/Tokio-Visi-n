import styled from "styled-components";

export const HeroSection = styled.section`
  width: 100%;
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 400px;
    height: 400px;
    border-radius: 50%;

    @media (max-width: 1000px) {
      width: 300px;
      height: 300px;
    }
    @media (max-width: 850px) {
      display: none;
    }
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 1000px) {
    gap: 30px;
  }
`;

export const HeroBox = styled.div`
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 500px;
  gap: 1rem;

  @media (max-width: 550px) {
    align-items: center;
  }

  div {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 10px;

    @media (max-width: 1000px) {
      font-size: 1.5rem;
    }
  }

  h4 {
    font-size: 1rem;
    @media (max-width: 1000px) {
      font-size: 0.8rem;
    }
  }

  p {
    width: 100%;
    max-width: 500px;
    text-align: justify;
    font-size: 1.2rem;
    margin-top: 30px;

    @media (max-width: 550px) {
      font-size: 0.8rem;
      max-width: 300px;
    }
  }
`;
