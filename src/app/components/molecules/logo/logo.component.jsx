import styled from "styled-components";
import { Heading } from "app/components/atoms/typography";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
  max-width: 218px;
  cursor: pointer;
`;


export const Logo = ({handleClick}) => {
  return (
    <LogoContainer onClick={handleClick}>
      <Heading>Paywall.africa</Heading>
    </LogoContainer>
  );
};
