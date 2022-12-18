import { createContext, useContext } from 'react';
import BeneficiaryListStore from './BeneficiaryListStore';
import TransferStore from './OtherTransferStore/index';
import AccNumVerifyStore from './VerifyAccNumStore/index';
import bankListStore from './BankListStore/index';
import AuthStore  from './AuthStore/index';
import WalletStore from './WalletStore';


export class RootStore {

  beneficiaryListStore;
  TransferStore;
  AccNumVerifyStore;
  bankListStore;
  authStore;
  walletStore

    constructor() {
      this.TransferStore = new TransferStore(this)
      this.beneficiaryListStore = new BeneficiaryListStore(this)
      this.AccNumVerifyStore = new AccNumVerifyStore(this)
      this.bankListStore = new bankListStore(this)
      this.authStore = new AuthStore(this)
      this.walletStore = new WalletStore(this)
      
      this.authStore.init()
      this.walletStore.init()
      this.beneficiaryListStore.init()
  }    
}

export const Stores = new RootStore();

const StoreContext = createContext(Stores);

export const StoreProvider = ({ children }) => (
    <StoreContext.Provider value={Stores}>{children}</StoreContext.Provider>
  );
  
export const useStore = () => useContext(StoreContext);
  
export default StoreProvider;