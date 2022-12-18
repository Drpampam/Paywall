import React from "react";
import Text from "../../atoms/typography";
import "./transaction-history.styles.jsx";
import {
  BankLogo,
  TransactionDetail,
  TransactionsContainer,
} from "./transaction-history.styles.jsx";
import { observer } from "mobx-react-lite";
import {useStore} from 'store/index'
import {FaAngleDoubleDown, FaAngleDoubleUp} from 'react-icons/fa'

const Transactions = () => {
  // bankLogo,
  // accountName,
  // bank,
  // time,
  // amount,
  // transactionType,
  const {walletStore} = useStore()
  const currencyFormatter = Intl.NumberFormat("en-US");
  
  return (
    <TransactionsContainer>
      <div className="transactions__heading">
        <Text weight={550}>Transaction History</Text>
      </div>
      <div>
        {Object.keys(walletStore.transactions).length > 0 &&
          walletStore.transactions.pageItems.map((el) => {
            const {
              narration,
              amount,
              type,
              transactionId,
              createdAt
            } = el;
            return (
              <TransactionDetail key={transactionId}>
                <div className="transactions__logo-user">
                  <BankLogo>
                    {(type === 0 && <div className="credit"><FaAngleDoubleDown/></div>) || (type === 1 && <div className="debit"><FaAngleDoubleUp/></div>)}
                  </BankLogo>
                  <div>
                    <Text weight={500}>{narration.length > 70 ? `${narration.substring(0, 70)} ...` : narration}</Text>
                    <div className="transactions__bank-time">
                      <Text>{new Date(createdAt).toLocaleString()}</Text>
                    </div>
                  </div>
                </div>
                <div className={type === 0 ? "credit" : "debit"}><Text weight={600}>&#8358;{currencyFormatter.format(amount)}{amount[amount.length-3] !== '.' && ".00"}</Text></div>
              </TransactionDetail>
            );
          })}
      </div>
    </TransactionsContainer>
  );
};

export default observer(Transactions);
