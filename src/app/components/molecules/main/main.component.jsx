import Button, {
  BUTTON_TYPE_CLASSES,
} from "app/components/atoms/button/button.component";
// import Header, { HEADER_TYPE_CLASSES } from 'app/components/atoms/header/header.component';
import {
  MainDiv,
  MainDivText,
  MainDivImg,
  MainDivTextDiv,
  MainHeading,
  MainImage,
  PaymentImage,
  PayImage,
} from "./main.styles.jsx";
import React from "react";
import Text from "app/components/atoms/typography/index.jsx";
import picture from "app/assets/img/customer.png";
import pay from "app/assets/img/pay.png";
import payment from "app/assets/img/payment.png";
import { useNavigate } from "react-router-dom";


const Main = () => {
  let navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <MainDiv>
        <MainDivText>
          <MainDivTextDiv>
            <MainHeading>
              Quick and easy payment platform for all your transactions
            </MainHeading>
            <Text className="saves">
              Save and manage all your transaction in one place, easy payment,
              anytime &amp; anyday.
            </Text>
          </MainDivTextDiv>
          <Button onClick={handleRegister} buttonType={BUTTON_TYPE_CLASSES.curved} width="200px">
            Create an account
          </Button>
        </MainDivText>
        <MainDivImg>
          <PayImage url={pay} altName="Pay Image" />
          <PaymentImage url={payment} altName="Payment Image" />
          <MainImage url={picture} altName="Customer Transaction" />
        </MainDivImg>
      </MainDiv>
    </>
  );
};

export default Main;
