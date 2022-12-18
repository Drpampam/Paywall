import {makeObservable, action, observable, autorun, toJS} from 'mobx'
import {api} from 'api/index'

class WalletStore {
    rootStore;
    transactions = {}
    wallet = {}
    isLoading = true
    errorMessage = ""
    userId = ""

    constructor(rootStore){
        makeObservable(this, {
            transactions: observable,
            wallet: observable,
            isLoading: observable,
            errorMessage: observable,
            userId: observable,

            initiateWalletTransfer: action.bound,
            fundWallet:action.bound
        })
        autorun(this.getWalletDetails)
        autorun(this.getTransactionHistory)

        this.rootStore = rootStore
    }

    init = () => {
        this.userId = this.rootStore.authStore.user.id
    }

    getTransactionHistory = async () => {
        if(Object.keys(this.wallet).length > 0){
            const response = await api.wallet.transactionHistory(this.wallet.virtualAccount.walletId);
            this.transactions = response.data.data
        }
    }

    getWalletDetails = async () => {
        if(this.userId){
            const response = await api.wallet.get(this.userId)
            this.wallet = response.data.data
            this.isLoading = false
        }
    }

    initiateWalletTransfer = async (data) => {
        const response = await api.wallet.walletTransfer(this.wallet.id, data)
        console.log("wallettransfer",)

        if(!response.data.status) {
            this.errorMessage = response.data.message            
        }
        
        this.getTransactionHistory()
        this.getWalletDetails()

        return response.data.status
    }

    fundWallet = async (data) => {
        const response = await api.wallet.initializeFunding(this.wallet.id, data)
        console.log("walletidFundwallet verify",this.wallet.id)

        console.log("fundwallet", response)
        if(response.data.status) {
            this.errorMessage = ""
            return response.data.data.data
        }else this.errorMessage = response.data.message
    }

    verifyFunding = async (ref) => {
        try{
            const data = {reference: ref}
            const response = await api.wallet.fundWalletVerify(this.wallet.id, data)
            console.log("walletidinfund verify",this.wallet.id)
            console.log("verifyfunding", response)
            await this.getWalletDetails()
            return response.data.status
        }catch(e){
            console.log(e.message)
        }
    }
}

export default WalletStore