import styled from "styled-components";
import Text, { Heading } from "../typography";

const HeaderDiv = styled.div`
    text-align: ${({ textAlign }) => textAlign || "center"};
`;

const HeaderSub = styled.div`
    width: ${({ width }) => width || "70%"};
    // text-align: ${({ textAlign }) => textAlign || "center"};
`;




const Header = ({ headingText, subText, children, ...props }) => {
  return (
    <HeaderDiv {...props}>
      <Heading
        lineHeight={48.41}
        size={40}
        weight={700}
        color={"var(--primary)"}
      >
        {headingText || children}
      </Heading>
      <HeaderSub {...props}>
        <Text
        lineHeight={24}
        size={16}
        weight={400}
        color={"var(--secondary)"}
        >
          {subText}
        </Text>
      </HeaderSub>
    </HeaderDiv>
  );
};

export default Header;
