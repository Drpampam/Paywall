import axios from "axios";

const USER_MANAGEMENT_SERVICE_BASE_URL = process.env.REACT_APP_USER_MANAGEMENT_BASE_URL;
const PAYMENT_SERVICE_BASE_URL = process.env.REACT_APP_PAYMENT_SERVICE_BASE_URL;

const userManagementRequest = axios.create({
    baseURL: USER_MANAGEMENT_SERVICE_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 30000,
    validateStatus: (status) => {
        return status >= 200 && status < 500
      },
});
const paymentRequest = axios.create({
    baseURL: PAYMENT_SERVICE_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 30000,
    validateStatus: (status) => {
        return status >= 200 && status < 500
      },
});

const apiRequest = {
    userManagementRequest,
    paymentRequest
}


export default apiRequest;
