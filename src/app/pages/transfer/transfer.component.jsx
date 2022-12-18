import { useState } from "react";
import React from "react";
import styled from "styled-components";

import * as Yup from "yup";

import PageTitle from "app/components/atoms/page-title/page-title.component";
import BackArrow from "app/components/atoms/back-arrow/back-arrow.component";
import AnimatedCard from "app/components/molecules/animated-card/animated-card.component";
import { useStore } from "store/index";
import DashboardLayout from "app/layouts/dashboard/dashboard-layout.component";
import { ReactComponent as Captcha } from "app/assets/svg/captcha.svg";
import { ReactComponent as Pyramid } from "app/assets/svg/pyramid.svg";
import BeneficiaryType from "app/components/molecules/beneficiary-type/beneficiary-type.component";
import TransferForm from "app/components/molecules/transfer-form/transfer-form.component";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import {
  AccountNumberValidator,
  EmailValidator,
  GeneralValidator,
  nameValidator,
  NumberValidator,
  PinValidator,
} from "utils/validation/validation.utils";
import LocalTransferForm from "app/components/molecules/local-transfer-form/local-transfer.components";
import SavedBeneficiary from "app/components/molecules/saved-beneficiary/saved-beneficiary.component";
export const TransferTypeContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const sampleContent = [
  {
    title: "Wallet Transfer",
    icon: <Captcha />,
    text: "Send money to another wallet at ease",
  },
  {
    title: "Bank Transfer",
    icon: <Pyramid />,
    text: "Seamlessly transfer money to other banks",
  },
];

const defaultFormFields = {
  amount: "",
  bank: "",
  accountNumber: "",
  accountName: "",
  description: "",
};

const defaultLocalTransferFormFields = {
  amount: "",
  emailAddress: "",
  narration: "",
  transactionPin: "",
  description: "",
};

const defaultFormFieldsLocal = {
  amount: "",
  description: "",
};

const validate = Yup.object({
  amount: NumberValidator,
  bank: GeneralValidator,
  accountNumber: AccountNumberValidator,
  accountName: nameValidator("Account name"),
  transactionPin: PinValidator,
  emailAddress: EmailValidator,
});

const Transfer = () => {
  let navigate = useNavigate();
  const [isLocal, setIsLocal] = useState(false);
  const [typeSelected, setTypeSelected] = useState(false);
  const { beneficiaryListStore } = useStore();
  const [showForm, setShowForm] = useState(false);
  const [showSavedBeneficiary, setShowSavedBeneficiary] = useState(false);
  const { walletStore, TransferStore } = useStore();
  const [selectedBeneficiary, setSelectedBeneficiary] = useState({});
  const [isSelected, setIsSelected] = useState();
  const [showLocalForm, setShowLocalForm] = useState(false);

  const handleClick = (index = 0) => {
    if (index !== 0) {
      setIsLocal(false);
    } else {
      setIsLocal(true);
    }
    setTypeSelected(true);
  };

  const handleReturn = (index = 0) => {
    setIsLocal(false);
    setTypeSelected(false);
    setShowForm(false);
  };

  const handleShowForm = async (formType, isLocal) => {
    if (formType === 0) {
      setShowForm(true);
      setTypeSelected(false);
    } else {
      await beneficiaryListStore.beneficiaryList();
      setShowSavedBeneficiary(true);
      setTypeSelected(false);
      setIsLocal(false);
      setShowForm(false);
    }
  };

  const handleSubmit = async (data) => {
    if (isLocal) {
      walletStore.initiateWalletTransfer(data);
      const response = await walletStore.initiateWalletTransfer(data);
      if (response) navigate("/dashboard");
    } else {
      const request = {
        recipientType: "nuban",
        amount: data.amount,
        description: data.narration,
        accountNumber: data.accountNumber,
        accountName: data.accountName,
        transferPin: data.pin,
        beneficiaryBank: {
          bankCode: data.bank.value,
          bankName: data.bank.label,
          paystackBankId: data.bank.id,
        },
        check: data.check,
      };
      const transferResponse = await TransferStore.transfer(request);
      if (transferResponse.data.message === "Transaction successful") navigate("/dashboard");
    }
  };

  const goToBeneficiaryType = (index = 0) => {
    setIsLocal(isLocal);
    setTypeSelected(true);
    setShowForm(false);
    setShowLocalForm(false);
    setShowSavedBeneficiary(false);
  };

  const handleSavedBeneficiary = (values) => {
    setSelectedBeneficiary(values);
    setShowSavedBeneficiary(false);
    showForm(false);
  };

  return (
    <DashboardLayout>
      {!typeSelected && <BackArrow handleReturn={() => navigate(-1)} />}
      <PageTitle text="TRANSFER" />
      <TransferTypeContainer>
        {!typeSelected &&
          !showForm &&
          !showLocalForm &&
          !showSavedBeneficiary && (
            <AnimatedCard handleClick={handleClick} content={sampleContent} />
          )}
        {typeSelected && !isLocal && (
          <BeneficiaryType
            transferType={isLocal}
            handleReturn={handleReturn}
            handleShowForm={handleShowForm}
          />
        )}

        {showForm && (
          <TransferForm
            defaultFormFields={defaultFormFields}
            validationSchema={validate}
            handleReturn={goToBeneficiaryType}
            handleSubmit={handleSubmit}
            isLocal={isLocal}
          />
        )}

        {isLocal && (
          <TransferForm
            defaultFormFields={defaultFormFieldsLocal}
            validationSchema={validate}
            handleReturn={handleReturn}
            isLocal={isLocal}
            handleSubmit={handleSubmit}
            error={walletStore.errorMessage}
          />
        )}
        {showSavedBeneficiary && (
          <SavedBeneficiary
            setSelectedBeneficiary={handleSavedBeneficiary}
            handleReturn={goToBeneficiaryType}
          />
        )}

        {showLocalForm && (
          <LocalTransferForm
            defaultLocalTransferFormFields={defaultLocalTransferFormFields}
            validationSchema={validate}
            handleReturn={goToBeneficiaryType}
          />
        )}
      </TransferTypeContainer>
    </DashboardLayout>
  );
};

export default observer(Transfer);
