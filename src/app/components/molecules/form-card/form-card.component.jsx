import styled from "styled-components/macro";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 32px;
  gap: 40px;
  width: 100%;

  background: #ffffff;
`;

const FormCard = ({ children }) => {
  return (
    <FormContainer>
      {children}
    </FormContainer>
  );
};

export default FormCard;
