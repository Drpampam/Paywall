import { Routes, Route } from "react-router-dom";
import StoreProvider from "./store";
import Home from "app/pages/home/home.component";
import {Login} from "app/pages/auth/login/login.component";
import Register from "app/pages/auth/register/register.component";
import Profile from "app/pages/profile/profile.component";
import Dashboard from "app/pages/dashboard/dashboard.component";
import { ResetPassword } from "app/pages/reset-password/reset-password.component";
import Transfer from "app/pages/transfer/transfer.component";
import EmailVerification from "app/pages/auth/email-verification/email-verification-page.component";
import PasswordReset from "app/pages/auth/password-reset/password-reset-page.component";
import { ForgetPassword } from "app/pages/auth/forget-password/forget-password-page.component";
import { ConfirmEmail } from "app/pages/auth/confirm-email";
import PrivateRoutes from "router/private.router";

function App() {
  return (
    <StoreProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoutes/>} >
          <Route index element = {<Dashboard/>}/>
        </Route>
        <Route path="/profile" element={<PrivateRoutes/>} >
          <Route index element = {<Profile/>}/>
        </Route>
        <Route path="/transfer" element={<PrivateRoutes/>} >
          <Route index element = {<Transfer/>}/>
        </Route>
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/forget-password" element = {<ForgetPassword/>}/>
        <Route path="/confirm-email" element = {<ConfirmEmail/>}/>
        <Route path="/reset-password" element = {<ResetPassword/>}/>
      </Routes>
    </StoreProvider>
  );
}
export default App;


