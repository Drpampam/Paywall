import Text from "app/components/atoms/typography";
import styled from "styled-components";

export const Featurebox = styled.div`
  background-color: var(--background--primary-opac);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 5rem 7rem 5rem 7rem;
  height: 38rem;
`;

export const FeatureIcon = styled.div`
  font-size: 40px;
  margin-bottom: 1rem;
`;

export const FeatureboxDiv = styled.div`
  width: 100%;
  margin-top: 4rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  height: 100%;
`;

export const FeatureboxDivText = styled(Text)`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

export const FeatureboxDivTextDIV = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

export const FeatureboxFeatures = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem 4rem;
  margin: 0 4rem auto 10rem;
  width: 100%;
`;

export const FeatureboxFeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: inherit;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 20px 0;
  width: 12rem;
  height: 12rem;


  &:hover {
    background-color: var(--background--primary-opac);
  }
`;

export const FeatureboxFeatureText = styled.div`
  width: 50%;
  align-items: center;
  text-align: center;
`;

export const FeatureboxFeatureTexts = styled(Text)`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: var(--secondary);
  text-align: center;
`;

export const FeatureboxFeatureIcon = styled.div``;
