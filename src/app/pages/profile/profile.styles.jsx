import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;
export const Main = styled.main`
  background-color: #e5e5e5;
  height: 100%;
`;
export const FormNav = styled.div`
  display: flex;
  align-items: center;
  width: 763px;
  text-align: left;
  color: #012a4a;
  font-size: 18x;
  font-weight: 600;
  gap: 8px;
`;
export const FormHeader = styled.div`
  padding: 10px;
  width: 763px;
  height: 54px;
  background: rgba(0, 0, 0, 0.08);
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #012a4a;
  text-align: center;
  text-transform: uppercase;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 40px 32px;
  margin-bottom: 100px;

  .Name {
    font-size: 16px;
    line-height: 19px;
    color: #012a4a;
    font-weight: 500;
  }

  .input {
    width: 697px;
    height: 48px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    font-size: 16px;
    padding: 8px 16px;
    outline: none;
    margin: 8px 0px;
  }

  .form-textarea {
    width: 697px;
    height: 134px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    font-size: 16px;
    padding: 8px 16px;
    outline: none;
    margin: 8px 0px;
  }

  .form-btn {
    width: 697px;
    height: 48px;
    background: linear-gradient(
      105.38deg,
      #4361ee 19.05%,
      #3a0ca3 82.03%,
      #3a0ca3 82.03%
    );
    color: #bac9cc;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    border: none;
    border-radius: 6px;
    margin: 10px 0px;
  }
`;
