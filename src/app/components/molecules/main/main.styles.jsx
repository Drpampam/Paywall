// import { Heading } from "app/components/atoms/typography";
import Image from "app/components/atoms/image/image.component";
import { Heading } from "app/components/atoms/typography";
import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 730px;
  padding: 12rem 4rem 5rem 6rem;
  background-image: linear-gradient(
    to right,
    rgb(216, 243, 220),
    rgb(255, 238, 221),
    rgb(216, 187, 255)
  );
`;

export const MainDivText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 55%;
  margin-top: 4rem;
  margin-left: 2rem;
  padding-bottom: 5rem;

  .saves {
    padding-top: 1rem;
    width: 70%;
    line-height: 20px;
    padding-bottom: 1.5rem;
  }
`;

export const MainDivTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainHeading = styled(Heading)`
  font-size : 50px; 
  font-weight : 700; 
  color : var(--primary);
`;

export const MainDivPara = styled.p`
    font-weight: 400;
    font-family: Inter;
    font-size; 16px;
`;

export const MainDivImg = styled.div`
  position: relative;
  width: 45%;
`;

export const MainImage = styled(Image)`
  background-color: rgba(216, 187, 255, 0.15);
  border-radius: 50rem;
  width: 450px;
  height: 450px;
  margin: 0 0 4rem 5rem;
  z-index: 0;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const PaymentImage = styled(Image)`
  position: absolute;
  left: 2rem;
  top: 13.5rem;
  width: 178px;
  height: 145px;
  z-index: 1;
`;

export const PayImage = styled(Image)`
  position: absolute;
  left: 21.5rem;
  top: 1rem;
  width: 207px;
  height: 64px;
  z-index: 1;
`;
