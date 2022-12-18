import Button from "app/components/atoms/button/button.component";
import { Input } from "app/components/atoms/form-input/form-input.styles";
import Text, { Heading } from "app/components/atoms/typography";
import styled from "styled-components";

export const NewsletterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 30rem;
  padding: 6rem 0;
  background-color: var(--background--secondary-opac);
`;

export const NewsletterHeader = styled.div`
    margin-bottom: 2rem;
`;

export const NewsletterHeading = styled(Heading)`
  line-height: 65.35px;
  font-size: 54px;
  font-weight: 700;
  color: var(--black);
`;

export const NewsletterText = styled.div`
width: 45%;
align-items: center;
`;

export const NewsletterSpam = styled.div`
width: 35%;
align-items: center;
`;


export const NewsletterPara = styled(Text)`
    line-height: 26px;
    font-size: 16px;
    font-weight: 400;
    color: var(--secondary);
`;

export const NewsletterInputDiv = styled.div`
display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NewsletterInput = styled.div`

`;

export const NewsletterEmail = styled(Input)`
width: 263px;
height: 58px;
border-radius: 0 !important;
`;

export const NewsletterButton = styled.div`
    margin-left: 1rem;
    margin-top: .5rem;
`;

export const NewsletterBtn = styled(Button)`
width: 263px;
height: 58px;
`;
