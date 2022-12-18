import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 50px;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "3rem"};
  color: #fff;
  background-image: linear-gradient(
    to right,
    rgb(67, 97, 238),
    rgb(58, 12, 163)
  );
  font-size: 1rem;
  border: 1px solid #fff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 16px;

  &:hover {
    border: none;
    background-image: linear-gradient(
      to right,
      rgb(67, 97, 244),
      rgb(58, 12, 123)
    );
  }
`;

export const CurvedButton = styled(BaseButton)`
  border-radius: 6px;
`;
