import BackArrow from "app/components/atoms/back-arrow/back-arrow.component";
import Button from "app/components/atoms/button/button.component";
import FormInput from "app/components/atoms/form-input/form-input.component";
import FormTextArea from "app/components/atoms/form-textarea/form-textarea.component";
import { Formik, Form } from "formik";
import React from "react";
import FormCard from "../form-card/form-card.component";

const LocalTransferForm = ({
  validationSchema,
  defaultLocalTransferFormFields,
  handleSubmit,
  handleReturn,
}) => {
  return (
    <FormCard>
      <BackArrow handleReturn={handleReturn} />
      <Formik
        initialValues={defaultLocalTransferFormFields}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values }) => {
          console.log({ values });
          return (
            <Form>
              <FormInput
                label="Email Address"
                name="emailAddress"
                placeholder="Email Address of Local Beneficiary"
                type="text"
              />
              <div>
                <span>Wallet Beneficiary Name</span>
                <label>Aegon Targaryen</label>
              </div>
              <FormInput
                label="Transfer Amount"
                name="transferAmount"
                placeholder="Transfer Amount"
                type="text"
              />
              <FormTextArea
                label="Narration"
                name="narration"
                placeholder="Enter Narration"
                type="text-area"
              />
              <FormInput
                label="Transaction Pin"
                name="pin"
                placeholder="Transaction Pin"
                type="text"
              />
              <Button width="100%" isLoading={isSubmitting}>
                Send Money
              </Button>
            </Form>
          );
        }}
      </Formik>
    </FormCard>
  );
};

export default LocalTransferForm;
