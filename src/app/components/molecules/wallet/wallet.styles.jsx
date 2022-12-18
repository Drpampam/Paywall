import Text from "app/components/atoms/typography";
import styled from "styled-components/macro";

export const WalletArea = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  min-height: 172px;
  background: white;
`;

export const WalletDetail = styled.div`
  color: #012a4a;
  display: flex;
  align-items: center;
  gap: 2rem;
  font-weight: 500;
  width: 100%;
  padding: 1.5rem;

  p {
    font-weight: 500;
  }

  .drop {
    position: absolute;
    right:0;
    top: 0;
  }

  .wallet-icon {
    padding: 1.5rem;
    background: rgba(67, 97, 238, 0.05);
    border-radius: 8px;
    width: 67px;
    height: 68px;
  }

  .wallet-info {
    display: flex;
    flex-direction: column;
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


export const WalletBtn = styled.div`
display: flex;
flex-direction: row;

button {
  // padding: 16px 40px;
  color: #012a4a;
  font-weight: 600;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 1;
  margin-left: 2rem;
  border-radius: 5px;
}

.btn-fund {
  background-color: #4361ee4d;
  border: none;
}

.bankName {
  margin-left: 1rem;
}
`;


export const ButtonLabel = styled(Text)`
 margin-top: .5rem;
`;

