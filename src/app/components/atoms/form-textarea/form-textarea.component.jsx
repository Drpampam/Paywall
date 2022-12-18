import { useViewport } from "hooks/useViewport";

import { useField, ErrorMessage } from "formik";
import { FormGroup, FormInputLabel, TextArea } from "./form-textarea.styles";

import styled from "styled-components";

export const ErrorText = styled.div`
  font-size: 12px;
  margin-bottom: 10px;
  color: red;
`;

const FormTextArea = ({ label, ...otherProps }) => {
  const { mobile } = useViewport();
  const [field, meta] = useField(otherProps);
  return (
    <FormGroup>
      {label && (
        <FormInputLabel
          shrink={field.value?.length}
          htmlFor={field?.name}
          color={mobile ? "#fff" : null}
        >
          {label}
        </FormInputLabel>
      )}
      <TextArea {...otherProps} {...field} error={meta.touched && meta.error} />
      <ErrorMessage name={field?.name}>
        {(msg) => <ErrorText id="text">{msg}</ErrorText>}
      </ErrorMessage>
    </FormGroup>
  );
};

export default FormTextArea;
