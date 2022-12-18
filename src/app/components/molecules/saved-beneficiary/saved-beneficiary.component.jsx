import BackArrow from "app/components/atoms/back-arrow/back-arrow.component";
import { BUTTON_TYPE_CLASSES } from "app/components/atoms/button/button.component";
import PageTitle from "app/components/atoms/page-title/page-title.component";
import FormCard from "../form-card/form-card.component";
import { useStore } from "store/index";
import React, { useState } from "react";
import Pagination from "../pagination/pagination.component";
import {
  BeneficiaryList,
  BeneficiaryDetail,
  Beneficiary,
  BeneficiaryBank,
  BeneficiaryName,
  BeneficiaryNumber,
  BeneficiaryPage,
  BankName,
  AccountName,
  AccountNumber,
  SelectButton,
} from "./saved-beneficiary.styles";
import TransferForm from "app/components/molecules/transfer-form/transfer-form.component";


const SavedBeneficiary = ({ handleReturn }) => {
  const [pageNumber, setPageNumber] = useState(0);
  let ListPerPage = 6;
  const PageVisited = pageNumber * ListPerPage;

  const [beneficiary, setBeneficiary] = useState({
    accountName: "",
    accountNumber: "",
    bank: {},
  });

  const handleClick = () => {
    console.log(beneficiary.bank.bankName)
   return <TransferForm defaultFormFields={beneficiary}/>
  }

  const {
    beneficiaryListStore: { beneficiaries },
  } = useStore();
  const { pageItems } = beneficiaries;

  return (
    <FormCard>
      <BackArrow handleReturn={handleReturn} />
      <PageTitle text="SAVED BENEFICIARIES" />
      <BeneficiaryList>
              <BeneficiaryDetail>
                {pageItems
                .slice(PageVisited, PageVisited + ListPerPage)
                .map((details, i) => (
                <Beneficiary key={i}>
                  <BeneficiaryBank>
                    <BankName>{details.bank.bankName}</BankName>
                  </BeneficiaryBank>
                  <BeneficiaryName>
                    <AccountName weight={500}>{details.accountName}</AccountName>
                  </BeneficiaryName>
                  <BeneficiaryNumber>
                    <AccountNumber weight={500}>{details.accountNumber}</AccountNumber>
                  </BeneficiaryNumber>
                  <SelectButton
                    Key={i}
                    onClick={() => {
                      setBeneficiary({
                        accountName: details.accountName,
                        accountNumber: details.accountNumber,
                        bank: details.bank,
                      });
                      handleClick();
                      
                    }}
                    buttonType={BUTTON_TYPE_CLASSES.curved}
                  >
                    Select
                  </SelectButton>
                </Beneficiary>
                ))}
              </BeneficiaryDetail>
      </BeneficiaryList>
      <BeneficiaryPage>
        <Pagination
          fetcheddata={pageItems}
          itemsPerPage={ListPerPage}
          setPageNumber={setPageNumber}
        />
      </BeneficiaryPage>
    </FormCard>   
  );
};

export default SavedBeneficiary;
