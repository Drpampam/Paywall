import { transactionDetails } from "app/assets/data/data";
import Transactions from "app/components/molecules/transaction-history/transaction-history";
import Wallet from "app/components/molecules/wallet/wallet.component";
import DashboardTabs from "app/components/molecules/dashboard-tabs/dashboard-tabs";
import DashboardLayout from "app/layouts/dashboard/dashboard-layout.component";
import FundingPopup from "app/components/molecules/Funding-Popup/Funding-Popup";
import { useEffect, useState } from "react";
import { useStore } from "store";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Verified } from "./dashboard.style";
import { observer } from "mobx-react-lite";

const Dashboard = () => {
  const[display, setDisplay] = useState(false);
  const {walletStore} = useStore();
  const [params, setParams] = useSearchParams()
  const [fundingVerified, setFundingverified] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const reference = params.get("reference")
    if(reference) {
      handleVerifyFunding(reference)
    }
  });

const handleVerifyFunding = async (reference) => {
  const response = await walletStore.verifyFunding(reference)
  if(response) {
    setFundingverified(true)
    setTimeout(() => {
      setFundingverified(false)
    }, 5000)
  }
  navigate("/dashboard")
}


  return (
    <DashboardLayout>
      {display && 
          <FundingPopup 
              setDisplay={setDisplay} 
          />  
      }
      {!display &&
        <>
          {fundingVerified && <Verified>Your funding has been verified. Well done!</Verified>}
          <Wallet setDisplay={setDisplay}/>
          <div className="container">
            <DashboardTabs />
            <Transactions transactionsList={transactionDetails} />
          </div>
        </>
      }
    </DashboardLayout>
  );
};

export default observer(Dashboard);
