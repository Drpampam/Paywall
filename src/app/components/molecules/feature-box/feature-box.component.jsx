import { featureItems } from "app/assets/data/data";
import { Heading } from "app/components/atoms/typography";
import React from "react";
import {
  FeatureIcon,
  Featurebox,
  FeatureboxDiv,
  FeatureboxDivText,
  FeatureboxFeatureTexts,
  FeatureboxDivTextDIV,
  FeatureboxFeatures,
  FeatureboxFeatureItem,
  FeatureboxFeatureText,
  FeatureboxFeatureIcon,
} from "./feature-box.styles";

const Feature = () => {
  return (
    <>
      <Featurebox>
        <FeatureboxDiv>
          <Heading
            lineHeight={50.41}
            size={50}
            weight={700}
            color={"var(--primary)"}
            width={30}
          >
            Get the convenience of transacting with our services
          </Heading>
          <FeatureboxDivTextDIV>
            <FeatureboxDivText>
            Spend more time living your life and less time worrying 
            about how to make payments.
            </FeatureboxDivText>
          </FeatureboxDivTextDIV>
        </FeatureboxDiv>
        <FeatureboxFeatures>
          {featureItems.map((item) => (
            <FeatureboxFeatureItem>
              <FeatureboxFeatureIcon>
                <FeatureIcon key={item.id}>{item.icon}</FeatureIcon>
              </FeatureboxFeatureIcon>
              <FeatureboxFeatureText>
                <FeatureboxFeatureTexts>{item.feature}</FeatureboxFeatureTexts>
              </FeatureboxFeatureText>
            </FeatureboxFeatureItem>
          ))}
        </FeatureboxFeatures>
      </Featurebox>
    </>
  );
};

export default Feature;
