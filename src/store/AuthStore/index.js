import { api } from "api/index";
import { makeObservable, observable, action } from "mobx";
import jwt_decode from "jwt-decode";

class AuthStore {
  // Create state
  isLoading = {
    login: false,
    register:false,
    verifyEmail:false
  };
  isAuthenticated = false
  errorMessage = ""
  rootStore;
  //creating another state for user object to populate userprofile
  user = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  };

    
  constructor(rootStore) {
    makeObservable(this, {
      // Register state
      isLoading: observable,
      isAuthenticated: observable,
      errorMessage: observable,
      user: observable,

      // Register actions
      login: action.bound,
      register: action.bound,
      verifyEmail: action.bound,
      verifyChangePassword : action.bound 
    });
    this.rootStore = rootStore;
  }

  init = () => {
    const token = localStorage.getItem("token")
    if(token){
      const decoded = jwt_decode(token);
      this.user.firstName = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"];
      this.user.lastName = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname"];
      this.user.email = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
      this.user.id = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]; 
      this.isAuthenticated = true
    }
  }

  async login({ email, password }) {
    this.isLoading.login = true;
    const response = await api.auth.login({ email, password });
    console.log(response);
    if(!response.data.status) {
      this.errorMessage = response.data.message
      this.isAuthenticated = false
    }
    else {
      localStorage.setItem("token", response.data.data.token);
      const decoded = await jwt_decode(response.data.data.token);
      this.user.firstName = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"];
      this.user.lastName = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname"];
      this.user.email = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
      this.user.id = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
      this.isAuthenticated = true;
      this.errorMessage = ""
      this.rootStore.walletStore.init()
    }
    this.isLoading.login = false;
  }

  logout = () => {
    localStorage.clear()
    this.user = {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
    };
  }

  async register(
    {firstName, lastName,
     email, phoneNumber, 
     bvn, password,
    confirmPassword, pin})
    {
    this.isLoading.register = true;
    const response = await api.auth.register(
      {firstName, lastName, 
        email, phoneNumber,
        bvn, password, 
        confirmPassword, pin})

      if(response.data.status){
        this.isLoading.register = false;
        localStorage.setItem("regEmail", email);
        this.errorMessage = null;
      }else{
        this.errorMessage = response.data.message;
        this.isLoading.register = true;
      }
  }

  async verifyEmail( otp ) {
    this.isLoading.verifyEmail = true;
    const email = localStorage.getItem("regEmail")
    const data = {
      emailAddress: email,
      token: otp
    }
    const response = await api.auth.verifyEmail(data);
    console.log(response)
    if (response.data.status) {
      this.isLoading.verifyEmail = true;
      this.errorMessage = "";
    }else{
      this.errorMessage = response.data.message
    }
  }
  async verifyChangePassword( emailAddress, token ) {
    const response = await api.auth.verifyChangePassword({ emailAddress, token});
    if (response.data.status) {
      this.isLoading.verifyEmail = true;
      this.errorMessage = null;
    }else{
      this.errorMessage = response.data.message
    }
  }
}

export default AuthStore;
