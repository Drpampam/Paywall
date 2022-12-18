import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 50px 0;

  div {
    width: 100%;
  }

  .beneficiary-type__choice {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #d9d9d9;
    background: white;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
  }

  .beneficiary-type__goBack {
    display: flex;
    align-items: center;
    gap: 10px;
    left: 0;
    top: -30px;
    cursor: pointer;
    font-weight: 550;
  }

  .beneficiary-type__content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .Local-transfer__choice{

  }
`;
