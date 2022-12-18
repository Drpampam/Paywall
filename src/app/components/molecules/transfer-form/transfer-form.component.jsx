import { useStore } from "store/index";
import BackArrow from "app/components/atoms/back-arrow/back-arrow.component";
import Button from "app/components/atoms/button/button.component";
import FormInput from "app/components/atoms/form-input/form-input.component";
import FormSelect from "app/components/atoms/form-select/form-select.component";
import FormTextArea from "app/components/atoms/form-textarea/form-textarea.component";
import { Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import FormCard from "../form-card/form-card.component";
import { observer } from "mobx-react-lite";
import Text from "app/components/atoms/typography";
import {
  FormInputLabel,
  Input,
} from "app/components/atoms/form-input/form-input.styles";
import { TextArea } from "app/components/atoms/form-textarea/form-textarea.styles";
import { SaveSpan } from "./transfer-form.styles";

const TransferForm = ({
  validationSchema,
  defaultFormFields,
  handleSubmit,
  handleReturn,
  isLocal,
  error,
  isSavedBeneficiary,
}) => {
  const { bankListStore, AccNumVerifyStore, beneficiaryListStore } = useStore();
  const listOfBanks = bankListStore.banks;

  const options = listOfBanks.map((bank) => ({
    label: bank.name,
    value: bank.code,
    id: bank.id,
  }));

  const [checked, setChecked] = useState(false);
  const [selectBank, setSelectBank] = useState({});
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [amount, setAmount] = useState(0.0);
  const [narration, setNarration] = useState("");
  const [pin, setPin] = useState(0);
  const[beneficiaryResponse, setBeneficiaryResponse] = useState("");

  const handleCheck = async () => {
    const data = {
      recipientType: "nuban",
      accountNumber: accountNumber,
      accountName: accountName,
      beneficiaryBank: {
        bankCode: selectBank.value,
        bankName: selectBank.label,
        paystackBankId: selectBank.id,
      },
    };
    const response = await beneficiaryListStore.addBeneficiary(data);
    setBeneficiaryResponse(response.data.message)
    console.log(response.data.message);
    setChecked(!checked);
  };

  useEffect(() => {
    handleAccountNumber();
  }, [accountNumber, accountName]);

  const handleAccountNumber = async () => {
    if (accountNumber.length === 10) {
      const data = {
        accountNumber: accountNumber,
        bankCode: selectBank.value,
      };
      const response = await AccNumVerifyStore.verify(data);
      setAccountName(response.data.data.accountName);
    }
  };

  return (
    <FormCard>
      <BackArrow handleReturn={handleReturn} />
      <Formik
        initialValues={defaultFormFields}
        validator={() => ({})}
        onSubmit={async (values, { setSubmitting }) => {
        
          if (!isLocal) {
            values = {
              amount: amount,
              description: narration,
              accountNumber: accountNumber,
              accountName: accountName,
              narration: narration,
              bank: selectBank,
              check: false,
              pin,
            };
            await handleSubmit(values);
            setSubmitting(true);
          } else {
            await handleSubmit(values);
            setSubmitting(true);
          }
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => {
          return (
            <Form>
              {error && <Text color="#ff0000">{error}</Text>}
              {!isLocal && (
                <>
                  {
                    <FormSelect
                      label="Select Bank"
                      options={options}
                      id="bankList"
                      value={selectBank}
                      onChange={(value) => {
                        console.log(value);
                        setSelectBank(value);
                      }}
                      name="bank"
                      required
                    />
                  }
                  <FormInputLabel>Account Number</FormInputLabel>
                  <Input
                    label="Account Number"
                    id="accountnumber"
                    name="accountNumber"
                    onChange={(e) => setAccountNumber(e.target.value)}
                    placeholder="Account Number"
                    value={accountNumber}
                    type="text"
                    readOnly={isSavedBeneficiary}
                  />
                  <FormInputLabel>Account Name</FormInputLabel>
                  <Input
                    disabled
                    id="accountname"
                    label="Account Name"
                    name="accountname"
                    placeholder="Account Name"
                    value={accountName}
                    type="text"
                  />
                  <FormInputLabel>Amount</FormInputLabel>
                  <Input
                    label="Amount"
                    name="amount"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                    type="text"
                  />
                  <FormInputLabel>Narration</FormInputLabel>
                  <TextArea
                    label="Narration"
                    name="narration"
                    id="narration"
                    value={narration}
                    onChange={(e) => setNarration(e.target.value)}
                    placeholder="Enter Narration"
                    type="text-area"
                  />
                  <FormInputLabel>Pin</FormInputLabel>
                  <Input
                    label="Pin"
                    id="Pin"
                    name="Pin"
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="Pin"
                    value={pin}
                    type="number"
                  />
                  <pre></pre>
                  <div>
                    <input type="checkbox" onChange={handleCheck} />
                    Save as beneficiary <SaveSpan>{checked ? beneficiaryResponse : ""}</SaveSpan>
                  </div>
                </>
              )}

              {isLocal && (
                <>
                  <FormInput
                    label="Destination Wallet Code"
                    name="destinationWalletCode"
                    placeholder="Destination Wallet Code"
                    type="text"
                  />
                  <FormInput
                    label="Amount"
                    name="amount"
                    placeholder="Amount"
                    type="text"
                  />
                  <FormTextArea
                    label="Description"
                    name="description"
                    placeholder="Enter Description"
                    type="text-area"
                  />
                  <FormInput
                    label="PIN"
                    name="transactionPin"
                    placeholder="PIN"
                    type="text"
                  />
                </>
              )}
              <Button type="submit" width="100%" isLoading={isSubmitting}>
                Send Money
              </Button>
              <br />
              {error && <Text color="#ff0000">{error}</Text>}
            </Form>
          );
        }}
      </Formik>
    </FormCard>
  );
};

export default observer(TransferForm);
