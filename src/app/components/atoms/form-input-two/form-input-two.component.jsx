import { useViewport } from "hooks/useViewport";

import { FormGroup, FormInputLabel, Input } from "./form-input-two.styles";

import styled from "styled-components";

export const ErrorText = styled.div`
  font-size: 12px;
  margin-bottom: 10px;
  color: red;
`;

const FormInputTwo = ({ label, ...otherProps }) => {
  const { mobile } = useViewport();
  return (
    <FormGroup>
      {label && (
        <FormInputLabel color={mobile ? "#fff" : null}>{label}</FormInputLabel>
      )}
      <Input {...otherProps} />
    </FormGroup>
  );
};

export default FormInputTwo;
