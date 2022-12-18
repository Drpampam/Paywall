import { AuthLayout } from "app/layouts/auth.layout";
import { BsFillPersonFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { GiPadlock } from "react-icons/gi";
import { useStore } from "store";
import * as Yup from "yup";
import { useState } from "react"
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom";
import {
  ConfirmPasswordValidator,
  EmailValidator,
  nameValidator,
  NumberValidator,
  PasswordValidator,
  phoneNumberValidator,
} from "utils/validation/validation.utils";

var formContent = {
  buttonText: "Sign Up",
  subQuestion: "Already have an account? ",
  subOption: "Login",
  subAnswer: "/login",
  greeting: "Get Started with Paywall",
  form: [
    {
      label: "First Name",
      placeHolder: "Enter your first Name...",
      type: "text",
      icon: BsFillPersonFill,
      name: "firstName",
    },
    {
      label: "Last Name",
      placeHolder: "Enter your last Name...",
      type: "text",
      icon: BsFillPersonFill,
      name: "lastName",
    },
    {
      label: "Email",
      placeHolder: "Enter your email...",
      tagType: "email",
      icon: HiMail,
      name: "email",
    },
    {
      label: "Phone Number",
      placeHolder: "Enter your phone number...",
      type: "number",
      icon: BsFillTelephoneInboundFill,
      name: "phoneNumber",
    },
    {
      label: "Password",
      placeHolder: "Enter password...",
      type: "password",
      icon: GiPadlock,
      name: "password",
    },
    {
      label: "Confirm Password",
      placeHolder: "Confirm Password...",
      type: "password",
      icon: GiPadlock,
      name: "confirmPassword",
    },
    {
      label: "Pin",
      placeHolder: "Enter Transaction Pin...",
      type: "number",
      icon: null,
      name: "pin",
    },
  ],
};

const defaultFormFields = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  pin: ""
};

const validate = Yup.object({
  firstName: nameValidator("First Name"),
  lastName: nameValidator("Last Name"),
  email: EmailValidator,
  phoneNumber: phoneNumberValidator,
  password: PasswordValidator,
  confirmPassword: ConfirmPasswordValidator,
  pin: NumberValidator
});

const Register = () => {
  const navigate = useNavigate();
  const {authStore} = useStore()

  const handleSignUp = async (values) => {
    await authStore.register(values)
    !authStore.errorMessage && navigate("/email-verification");
  };

  return (
    <AuthLayout
      content={formContent}
      validationSchema={validate}
      initialValues={defaultFormFields}
      handleSubmit={handleSignUp}
      error={authStore.errorMessage}
    />
  );
};

export default observer(Register);