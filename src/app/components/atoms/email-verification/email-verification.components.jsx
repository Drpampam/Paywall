import {EmailVerification,VerificationButton} from "./email-verification.styles";
import { Form, Formik } from "formik";
import FormInput from "app/components/atoms/form-input/form-input.component";
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom";
import { useStore } from "store";
import  { BUTTON_TYPE_CLASSES } from "app/components/atoms/button/button.component";
import Text from "app/components/atoms/typography";


const initialValues = {
    OTP:"",
    email:""
}

export const VerificationConfirmation = observer(() => {
  const navigate = useNavigate();
  const {authStore} = useStore()

  const verifyToken = async ({OTP}) => {
    await authStore.verifyEmail(OTP)
    authStore.errorMessage.length === 0 && navigate("/login");
  };
    return (
      <EmailVerification>
        <p className="notification-paragrapgh">
          Hi there, an OTP was sent to your email 
          Paste it here to verify your email 
        </p>
        {authStore.errorMessage && authStore.errorMessage.length > 0 && <Text color="#ff0000">{authStore.errorMessage}</Text>}
        <Formik
          initialValues={initialValues}
          onSubmit={ (values, { setSubmitting }) => {
            setSubmitting(true);
            verifyToken(values);
          }}
        >
          {({values,  isSubmitting }) => (
            <Form>
              <FormInput
                name="OTP"
                placeholder="Enter your OTP"
                type="text"
              />
              
              <VerificationButton buttonType = {BUTTON_TYPE_CLASSES.curved} isLoading={isSubmitting} type="submit">
                Verify Email
              </VerificationButton> 
            </Form>
          )}
        </Formik>
      </EmailVerification>
    );
  });