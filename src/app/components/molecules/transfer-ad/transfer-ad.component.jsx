import { Heading } from "app/components/atoms/typography";
import React from "react";
import {
  TransferAdContainer,
  RightPane,
  CustomText,
  TextContainer,
  LeftPane,
} from "./transfer-ad.styles";
import Image from "app/components/atoms/image/image.component";
import picture from "app/assets/img/Card2Cash.png";

const CardTransferAd = () => {
  return (
    <>
      <TransferAdContainer>
        <LeftPane>
          <Image className="cardImg" url={picture} altName="Card to cash Transaction" />
        </LeftPane>
        <RightPane>
          <Heading
            lineHeight={50.41}
            size={50}
            weight={700}
            color={"var(--primary)"}
          >
            Choose how you want to make transfers
          </Heading>
          <TextContainer>
            <CustomText>
            Paywall Africa offers an organized banking and payment 
            service across over 200 banks in Nigeria.
            </CustomText>
          </TextContainer>
        </RightPane>
      </TransferAdContainer>
    </>
  );
};

export default CardTransferAd;
