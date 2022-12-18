import styled, { css } from "styled-components/macro";


const subColor = "grey";

const errorStyle = css`
  background-color: pink;
  border: 1px solid red;
`;

export const FormInputLabel = styled.label`
  font-size: 14px;
  font-weight: 700;
`;

export const TextArea = styled.textarea`
  font-size: 18px;
  padding: 12px 20px;
  display: block;
  width: ${({ width }) => width || '100%'};
  border: 1px solid #4db8ff;
  border-radius: 4px;
  margin: 15px 0px;

  :invalid {
    ${({ error }) => error && errorStyle};
  }

  ::placeholder {
    color: ${subColor};
    opacity: 1;
    font-size: 14px;
  }

  &:focus {
    outline: none;
  }

`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  position: relative;
`;

