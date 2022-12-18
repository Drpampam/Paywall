import * as Yup from "yup";

export const ConfirmPasswordValidator = Yup.string()
  .oneOf(
    [Yup.ref("password"), Yup.ref("newPassword"), null],
    "Password must match"
  )
  .required("Confirm Password is required");

export const PasswordValidator = Yup.string()
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
    "Must Contain at least 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  )
  .required("Password is required");

  export const EmailValidator = Yup.string()
  .email("Email is invalid")
  .required("Email is Required");

export const nameValidator = (name = "") =>
  Yup.string().required(name ? `${name} is required` : "Required");

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const fourDigitsRegex = /^\d{4}$/;
const elevenDigitsRegex = /^\d{11}$/;
const tenDigitsRegex = /^\d{10}$/;
export const phoneNumberValidator = Yup.string()
  .matches(phoneRegExp, "Phone number is not valid")
  .required("Phone Number is Required");

export const GeneralValidator = Yup.string().required("Required");

export const ConsentValidator = Yup.bool()
  .test(
    "acceptTerms",
    "You have to agree with our Terms and Conditions!",
    (value) => value === true
  )
  .required("You have to agree with our Terms and Conditions!");

export const NumberValidator = Yup.number().required("Required");

export const BVNValidator = Yup.string()
  .matches(elevenDigitsRegex, "Must be 11 digits")
  .required("Required");

export const AccountNumberValidator = Yup.string()
  .matches(tenDigitsRegex, "Must be 11 digits")
  .required("Required");

  export const PinValidator = Yup.string()
  .matches(fourDigitsRegex, "Must be 4 digits")
  .required("Pin is Required");