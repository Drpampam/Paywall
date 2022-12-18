import Text, { Heading } from "app/components/atoms/typography";
import { IoWalletOutline } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";
import { WalletArea, WalletDetail, WalletBtn, ButtonLabel } from "./wallet.styles";
import { ReactComponent as DropSvg } from "app/assets/svg/acc-bg.svg";
import { useStore } from "store/index";
import { useNavigate } from "react-router-dom/dist/index.js";
import { FaClone } from "react-icons/fa";

const Wallet = ({setDisplay}) => {
  let navigate = useNavigate();
  const {walletStore} = useStore();
  const currencyFormatter = Intl.NumberFormat("en-US");
  const balance = currencyFormatter.format(walletStore.wallet.balance)

  return (
    <WalletArea className="container">
      <WalletDetail>
      <IoWalletOutline className="wallet-icon" />
        {!walletStore.isLoading && (
          <div className="wallet-info">
            <Text className="balance-text">Account Balance</Text>
            <Heading weight={700} size={32}> 
            &#8358;{balance}{balance[balance.length-3] !== '.' && ".00"}
            </Heading>
            <Text className="bankName">{walletStore.wallet.virtualAccount.bank.bankName}</Text>
            <Text className="account-number">
              <FaClone /> {walletStore.wallet.virtualAccount.accountNumber}
            </Text>
          </div>
        )}

        <WalletBtn>
          <button className="btn-fund" onClick={() => setDisplay(true)}>
          <GiWallet />
          </button>
          <ButtonLabel className="bankName">Fund Wallet</ButtonLabel>
        </WalletBtn>
        <DropSvg className="drop" />
      </WalletDetail>
    </WalletArea>
  );
};

export default Wallet;
