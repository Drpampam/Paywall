import styled from "styled-components";
import Button from "../button/button.component";

export const PasswordReset = styled.div`
  position: relative;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 15px;
  padding-right: 25%;
  padding-left: 25%;

  .notification-paragraph-two {
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  .span-element {
    font-family: Manrope;
    font-size: 16px;
    font-weight: 700;
    line-height: 20.08px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 20px;
    color: #4361ee;
  }
`;

export const VerificationButton = styled(Button)`
margin: auto;
`;
