import { ErrorMessage, useField } from "formik";
import { useViewport } from "hooks/useViewport";
import { toJS } from "mobx";
import Select from "react-select";
import styled from "styled-components";


export const FormInputLabel = styled.label`
  font-size: 14px;
  font-weight: 700;
`;

const CustomSelect = styled(Select)`
  width: 100%;
  margin: 20px 0 10px;
  .select {
    &__control {
      background-color: #f2f6ff;
      width: ${({ width }) => width || "100%"};
      border: 1px solid #dbe7ff;
      border-radius: 5px;

      option {
        font-size: 18px;
      }
    }

    &__menu-list {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 100%;
  position: relative;
`;

export const ErrorText = styled.div`
  font-size: 12px;
  margin-bottom: 10px;
  color: red;
`;

const FormSelect = ({ label, onChange, disabled, options, ...otherProps }) => {
  const [field] = useField(otherProps);
  const { mobile } = useViewport();
 
  return (
    <FormGroup>
      {label && (
        <FormInputLabel
          shrink={field.value?.length}
          htmlFor={field?.name}
          color={mobile ? "#fff" : ""}
        >
          {label}
        </FormInputLabel>
      )}
      <CustomSelect
        classNamePrefix="select"
        value={
          options ? options.find((option) => option.value === field.value) : ""
        }
        options={options}
        onChange={(value) => { onChange(value)}}
      />
      <ErrorMessage name={field?.name}>
        {(msg) => <ErrorText id="text">{msg}</ErrorText>}
      </ErrorMessage>
    </FormGroup>
  );
};

export default FormSelect;
