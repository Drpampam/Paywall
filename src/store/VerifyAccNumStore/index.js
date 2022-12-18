import {api} from "api/index";
import { makeObservable, observable, autorun, action} from "mobx";

class AccNumVerifyStore {
  // Create state
    accountDetails = {}
    
  // Create state
  isLoading = false;
  rootStore;
    
  constructor(rootStore) {
    makeObservable(this, {
      // Register state
      isLoading: observable,
      accountDetails: observable,
      // verify:action,
    });
    this.rootStore = rootStore;
    autorun(this.verify);;
  }

  verify = async (data) => {
    console.log("we got here");

        this.isLoading = true;
        console.log("this",data.bankCode)
        const response =  await api.accountVerification.verifyAccount(data);
        this.accountDetails = response.data.data
        console.log("acc", this.accountDetails)
        this.isLoading= false;
        return response
  } 
}

export default AccNumVerifyStore;