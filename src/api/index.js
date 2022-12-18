import apiRequest from "./requests";

const auth = {
  /**
   *
   * @param {{email: string, password: string}} data
   * @returns {AxiosResponse<{data: {id: string, roles: [], userName: string, companyName: string, token: string}, succeeded: boolean, message: string, statusCode: number}>}
   */
  login: async (data) => await apiRequest.userManagementRequest.post("auth/login", data),
  register: (data) => apiRequest.userManagementRequest.post("/auth/register", data),
  verifyEmail: async (data) => await apiRequest.userManagementRequest.post("auth/confirm-email", data),
  verifyChangePassword: (data) => apiRequest.userManagementRequest.post("auth/change-password", data)
};

const wallet = {
  get: async (id) => await apiRequest.paymentRequest.get(`Wallets/user-wallet/${id}`),
  transactionHistory: async (id) => await apiRequest.paymentRequest.get(`Transactions/transaction-history/${id}`),
  walletTransfer: async (id, data) => await apiRequest.paymentRequest.post(`Wallets/local-transfer/${id}`, data),
  initializeFunding: async (id, data) => await apiRequest.paymentRequest.post(`Wallets/initialize-fund-wallet/${id}`, data),
  fundWalletVerify: async (id, reference) => await apiRequest.paymentRequest.post(`/Wallets/fund-wallet-verification/${id}`, reference)
};

const beneficiaryList ={
  get: async (id) => await apiRequest.paymentRequest.get(`Banks/beneficiary-list/${id}`)
}

const bankList = {
  get: async () => await apiRequest.paymentRequest.get(`Banks/get-all-banks`)
}
const transfer = {
  othertransfer: async(id, data) => await apiRequest.paymentRequest.post(`Wallets/bank-transfer/${id}`,data)
}

const accountVerification = {
  verifyAccount: async(data) => await apiRequest.paymentRequest.post(`Banks/verify-account-number`, data)
}

const beneficiary ={
  addBeneficiary: async(id,data) => await apiRequest.paymentRequest.post(`Banks/add-beneficiary/${id}`, data)
}

export const api = {
  auth,
  wallet,
  beneficiaryList,
   transfer,
   bankList,
   accountVerification,
   beneficiary,
};
