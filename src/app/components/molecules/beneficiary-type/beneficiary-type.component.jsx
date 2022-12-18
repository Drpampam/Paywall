import Text from "app/components/atoms/typography";
import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Wrapper } from "./beneficiary-type.styles";
import BackArrow from "app/components/atoms/back-arrow/back-arrow.component";

const BeneficiaryType = ({
  transferType,
  handleReturn,
  handleShowForm,
}) => {
  return (
    <Wrapper className="animate__animated animate__backInLeft">
      <BackArrow handleReturn={handleReturn} />
      <div style={{ marginTop: 10 }} className="beneficiary-type__content">
        <div>
          <Text weight={550}>Destination</Text>
          <Text size={14}>Where do we send the money?</Text>
        </div>
        <div className="beneficiary-type__choice">
          <Text>{transferType ? "Local Transfer" : "To Other Banks"}</Text>
          <IoIosCheckmarkCircle />
        </div>
          <div>
            <div>
              <Text weight={550}>Beneficiary Type</Text>
              <Text size={14}>Is this a new or existing contact?</Text>
            </div>
            <div>
              <div
                className="beneficiary-type__choice"
                onClick={() => handleShowForm(0)}
              >
                <Text>New Beneficiary</Text>
              </div>
              <div
                className="beneficiary-type__choice"
                onClick={() => handleShowForm(1)}
              >
                <Text>Saved Beneficiary</Text>
              </div>
            </div>
          </div>
      </div>
    </Wrapper>
  );
};

export default BeneficiaryType;
