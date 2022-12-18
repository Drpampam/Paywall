import {api}  from "api/index";
import { makeObservable, observable, autorun} from "mobx";

class bankListStore {
    // Create state
    banks = []
    isLoading = false;
    rootStore;
      
    constructor(rootStore) {
      makeObservable(this, {
        // Register state
        isLoading: observable,
        banks: observable
      });
      this.rootStore = rootStore;
      autorun(this.bankList)
    }
  
    bankList = async () => {
      this.isLoading = true;
      const response =  await api.bankList.get();

      this.banks = response.data.data
      this.isLoading = false;     
    }
  }
  export default bankListStore;