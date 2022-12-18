import styled from "styled-components/macro";
import img from "app/assets/img/samplePicture.png";

export const AuthContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-areas: "a b";
  grid-template-columns: 1fr 1fr;
  .auth-layout__content {
    grid-area: a;
    display: flex;
    flex-direction: column;
    padding: 2rem 9rem 4rem 9rem;
    width: 100%;
  }

  .auth-layout__img {
    grid-area: b;
    background-image: url(${img});
    background-size: cover;
    background-color: #5ba5dd;
  }

  .auth-layout__greeting {
    margin-top: 80px;
    margin-bottom: 40px;
  } 
`;
