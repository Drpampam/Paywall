import {api} from "api/index";
import { makeObservable, observable, action, toJS} from "mobx";

class TransferStore {
  // Create state
 errorMessage = ""
  // Create state
  isLoading = false;
  rootStore;
    
  constructor(rootStore) {
    makeObservable(this, {
      // Register state
      transfer: action.bound
    });
    this.rootStore = rootStore;

  }

  transfer = async (data) => {
    const response =  await api.transfer.othertransfer(this.rootStore.walletStore.wallet.id,data);
    if(!response.status)
    {
      this.errorMessage = response.data.message;
    }

    return response
  } 
}

export default TransferStore;
