import FormInput from "app/components/atoms/form-input/form-input.component";
import BackArrow from "app/components/atoms/back-arrow/back-arrow.component";
import Button, { BUTTON_TYPE_CLASSES } from "app/components/atoms/button/button.component";
import FormTextArea from "app/components/atoms/form-textarea/form-textarea.component";
import { Form, Formik } from "formik";
import { FundingContainer,Sub1 } from "./Funding-Popup.style";
import * as Yup from "yup";
import {EmailValidator} from "utils/validation/validation.utils";
import FormCard from "../form-card/form-card.component";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useStore } from "store";
import { useNavigate, useParams } from "react-router-dom";

const defaultFormFields = {
  amount:"",
  email: "",
  narration: ""
};
const validate = Yup.object({
  email: EmailValidator,
});

const FundingPopup = observer(({setDisplay})=>{
    const handleReturn = () => setDisplay(false);
    const navigate = useNavigate();
    const {walletStore, authStore} = useStore();
    
    const handleFunding = async (values) => {
        values.email = authStore.user.email
        const response = await walletStore.fundWallet(values);
        if(!walletStore.errorMessage) window.location.href = response.authorization_url;
    };

    return(
        <FormCard >
            <BackArrow handleReturn={handleReturn} />
            <Formik
                initialValues={defaultFormFields}
                // validationSchema={validate}
                validator={() => ({})}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true);
                    handleFunding(values);
                }}
            >
                {({values,  isSubmitting }) => (
                    <div>
                        <Form>
                            <FundingContainer>
                                <Sub1 >
                                    <div style={{"width":"100%"}}>
                                        <FormInput 
                                            name ={"amount"}
                                            label={"Enter Amount*"}
                                            placeholder={0.00}
                                            type={"number"}
                                            key={3}
                                        />
                                    </div>
                                </Sub1>
                                <div style={{"width":"100%"}}>
                                    <FormTextArea
                                        label={"Narration" }
                                        placeholder={"Enter your narration"}
                                        type={"text-area"}
                                        name={"narration"}
                                        key={1}
                                    />
                                </div>
                                <Button buttonType = {BUTTON_TYPE_CLASSES.curved} isLoading={isSubmitting} type="submit" width="100%" >
                                    Proceed
                                </Button>
                            </FundingContainer>
                        </Form>
                    </div>
                )}
            </Formik>
        </FormCard>
    )
})
export default FundingPopup;