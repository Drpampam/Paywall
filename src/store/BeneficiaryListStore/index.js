import { api } from "api/index";
import { action, autorun, makeObservable, observable } from "mobx";
import { observer } from "mobx-react-lite";
import { useStore } from "store/index";

class BeneficiaryListStore {
  // Create state
  beneficiaries = {};
  isLoading = false;
  rootStore;

  constructor(rootStore) {
    makeObservable(this, {
      // Register state
      isLoading: observable,
      beneficiaries: observable,
      addBeneficiary: action,  

    });
    this.rootStore = rootStore;
    autorun(this.beneficiaryList);
  }

  init = () => {
    this.walletId = this.rootStore.walletStore.wallet.id
  }

  beneficiaryList = async () => {

    this.isLoading = true;
    const response = await api.beneficiaryList.get(this.rootStore.walletStore.wallet.id);

    this.beneficiaries = response.data.data;

    this.isLoading = false;
  };

  addBeneficiary = async (data) =>
  {

    this.isLoading = true;
    const response = await api.beneficiary.addBeneficiary(this.rootStore.walletStore.wallet.id,data)

    this.isLoading = false;

    return response;
  }
}
export default BeneficiaryListStore;