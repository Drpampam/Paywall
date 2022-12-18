import { AuthLayout } from "app/layouts/auth.layout";
import * as Yup from "yup";

import {
  ConfirmPasswordValidator,
  PasswordValidator
} from "utils/validation/validation.utils";

var formContent = {
  buttonText: "Reset Password",
  greeting: "Reset Password",
  form: [
    {
      label: "password",
      placeHolder: "Enter New Password...",
      type: "password",
      icon: null,
      name: "password",
    },
    {
      label: "Confirm Password",
      placeHolder: "Confirm Password...",
      type: "password",
      icon: null,
      name: "ConfirmPassword",
    }
  ],
};
const defaultFormFields = {
  password: "",
  confirmPassword: "",
};

const validate = Yup.object({
  password: PasswordValidator,
  confirmPassword: ConfirmPasswordValidator,
});
export const ResetPassword = () => {
  const handleResetPassword = (values) => {
  };
  return (
    <AuthLayout
    content={formContent}
    validationSchema={validate}
    initialValues={defaultFormFields}
    handleSubmit={handleResetPassword} />
  );
};

