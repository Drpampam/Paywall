import {TokenVerification,TokenButton} from "./token-verification.styles";
import { Form, Formik } from "formik";
import FormInput from "app/components/atoms/form-input/form-input.component";
import {TokenValidator} from "utils/validation/validation.utils";
import * as Yup from "yup";
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom";
import { useStore } from "store";
import  { BUTTON_TYPE_CLASSES } from "app/components/atoms/button/button.component";
import Text from "app/components/atoms/typography";

const initialValues = {
    OTP:"",
    email:""
}
const validate = Yup.object({
  OTP:TokenValidator
})

export const PasswordTokenVerification = observer(() => {
  const navigate = useNavigate();
  const {authStore} = useStore()

  const verifyToken = async ({OTP}) => {
    await authStore.verifyEmail(OTP)
    !authStore.errorMessage && navigate("/login");
  };
    return (
      <TokenVerification>
        <p className="notification-paragrapgh">
          Hi there, an OTP was sent to your email 
          Paste it here to confirm password 
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={ ({ setSubmitting }) => {
            setSubmitting(false);
          }}
        >
          {({values,  isSubmitting }) => (
            <Form onSubmit={(e) => {e.preventDefault(); verifyToken(values);}}>
              {authStore.errorMessage && <Text color="#ff0000">{authStore.errorMessage}</Text>}
              <FormInput
                name="OTP"
                placeholder="Enter your OTP"
                type="number"
              />
              <TokenButton buttonType = {BUTTON_TYPE_CLASSES.curved} isLoading={isSubmitting} type="submit">
                Change password
              </TokenButton> 
            </Form>
          )}
        </Formik>
      </TokenVerification>
    );
  });