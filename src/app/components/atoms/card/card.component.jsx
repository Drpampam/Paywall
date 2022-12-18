import styled from "styled-components";

export const CardContainer = styled.div`
  display: ${({ display }) => display || ""};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  background: ${({ b }) => b || "#ffffff"};
  box-shadow: 2px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  text-align: left;
  position: relative;
  overflow: hidden;
  padding: ${({ p }) => p || "10px 25px"};
  height: ${({ h }) => h || "100%"};
  margin: ${({ m }) => m || "0"};
  min-width: 250px;
  max-width: ${({ maxWidth }) => maxWidth || ""};
  @media screen and (min-width: 650px) {
  }
`;

const Card = ({ children, ...otherProps }) => {
  const {
    height,
    margin,
    padding,
    background,
    display,
    flexDirection,
    maxWidth,
  } = otherProps;
  return (
    <CardContainer
      h={height}
      m={margin}
      p={padding}
      b={background}
      display={display}
      flexDirection={flexDirection}
      maxWidth={maxWidth}
    >
      {children}
    </CardContainer>
  );
};

export default Card;
