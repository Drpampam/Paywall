import styled from "styled-components";

export const Verified = styled.p `
  background: rgb(36, 223, 36);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.3rem;
  width: 100%;
  margin: 1rem 0;
  padding: 2rem;
  color: whitesmoke;
  border-radius: 5px;
`

export const WalletDetail = styled.div`
  color: #012a4a;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  width: 50%;
  font-weight: 500;

  p {
    font-weight: 500;
  }

  .balance {
    font-size: 3rem;
    font-weight: 700;
  }

  .wallet-icon {
    padding: 1.5rem;
    background-color: #4361ee0d;
    border-radius: 4px;
  }

  .wallet-info {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
`;

export const TabsArea = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem 7rem 2rem 7rem;
  border-style: solid;
  border-width: 0.5px;
  border-color: #012a4a;

  button {
    padding: 1rem 2rem 1rem 2rem;
    color: #012a4a;
    font-weight: 600;
  }

  .btn-transfer {
    background-color: #4361ee4d;
    border: none;
  }
`;
