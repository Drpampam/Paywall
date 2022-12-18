import styled from "styled-components";

export const TransactionsContainer = styled.div`
  display: flex;
  flex-direction: column;

  .transactions__heading {
    display: flex;
    align-items: center;
    padding-left: 10px;
    height: 39px;
    background: rgba(0, 0, 0, 0.04);
  }
`;

export const TransactionDetail = styled.div`
  display: flex;
  margin: 20px 0;
  align-items: center;
  justify-content: space-between;

  .transactions__logo-user {
    display: flex;
    gap: 24px;
    width: 80%;
  }

  .transactions__bank {
    width: 80%;

    .transactions__bank-time {
      display: flex;
      flex-direction: row;
      justify-content: space-between;   
      width: 40%;   
  
      p {
        color: #979797;
        font-weight: 400;
      }
    }
  }

  .credit {
    color: #34a853;
    p {
      color: #34a853;
    }
  }

  .debit {
    color: red;
    p {
      color: red;
    }
  }
`;

export const BankLogo = styled.div`
  display: flex;
  align-self: center;
  width: 5%;
  font-size: 1.5rem;


  img {
    height: 40px;
    width: 40px;
    object-fit: cover;
  }
`;
