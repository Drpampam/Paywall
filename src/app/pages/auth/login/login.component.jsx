import { AuthLayout } from "app/layouts/auth.layout";
import { HiMail } from "react-icons/hi";
import { GiPadlock } from "react-icons/gi";

import * as Yup from "yup";
import {
  EmailValidator,
  PasswordValidator,
} from "utils/validation/validation.utils";
import { useNavigate } from "react-router-dom";
import { useStore } from "store";
import { observer } from "mobx-react-lite";

var formContent = {
  buttonText: "Login",
  mainQuestion: "Forgot password?",
  mainAnswer: "/forgot-password",
  subQuestion: "Don’t have an account?",
  subOption: "Create account",
  subAnswer: "/register",
  greeting: "Hi, Welcome back",
  form: [
    {
      label: "Email",
      placeHolder: "Enter your email...",
      type: "email",
      icon: HiMail,
      name: "email",
    },
    {
      label: "Password",
      placeHolder: "Enter password...",
      type: "password",
      icon: GiPadlock,
      name: "password",
    },
  ],
};

const defaultFormFields = {
  email: "",
  password: "",
};

const validate = Yup.object({
  email: EmailValidator,
  password: PasswordValidator,
});

export const Login = observer(() => {
  const navigate = useNavigate();
  const {authStore} = useStore()

  const handleLogin = async (values) => {
    await authStore.login(values)
    !authStore.errorMessage && navigate("/dashboard");
  };
  return (
    <AuthLayout
      content={formContent}
      validationSchema={validate}
      initialValues={defaultFormFields}
      handleSubmit={handleLogin}
      error={authStore.errorMessage}
    />
  );
});
