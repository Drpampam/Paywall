import Text, { Heading, Span } from "app/components/atoms/typography";
import styled from "styled-components";

export const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem;
`;

export const AboutTop = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  margin: 3rem 0;
  height: 100%;
`;

export const AboutTopText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AboutTopCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 6rem;
`;

export const AboutCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

export const CardAnchor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between
  margin-left: 1rem;
  margin-right: 2rem;
`;

export const CardAnchorCircle = styled.div`
  border-radius: 19px;
  border: 1px solid var(--secondary);
  display: inline-block;
  margin-bottom: 0.5rem;
`;

export const CardAnchorInner = styled.div`
  border-radius: 15px;
  background-color: var(--secondary);
  margin: 4px;
  height: 13px;
  width: 13px;
`;

export const CardAnchorLine = styled.div`
  border: 1px solid var(--secondary);
  height: 7rem;
  width: 0;
  margin-left: 0.7rem;
`;

export const AboutCardItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutCardLabel = styled(Span)`
  color: var(--secondary);
  font-size: 14px;
  line-height: 24px;
  weight: 300;
`;
export const AboutCardTitle = styled(Heading)`
  margin-top: 1rem;
`;
export const AboutCardText = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  width: 70%;
  margin-top: 1rem;
`;

export const AboutTopImg = styled.div`
  margin-top: 4rem;

  .Images {
    background-image: linear-gradient(
      to bottom,
      rgb(216, 187, 255),
      rgb(216, 243, 220)
    );
    width: 476px;
    height: 597px;
    border-radius: 20px;
    margin-right: 2rem;
  }
`;

export const AboutMid = styled.div`
  margin: 3rem 0 7rem 0;
`;

export const AboutBottom = styled.div`
margin-left: 2rem;
`;

export const AboutBottomCard = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 3rem 0;
  width: 100%;
`;

export const ReviewItems = styled.div`
`;

export const ReviewItemCard = styled.div`
  background-color: var(--background--primary-opac);
  width: 374px;
  height: 218px;
  padding: 32px 24px;
`;

export const ReviewName = styled(Span)`
  line-height: 26px;
  size: 16px;
  color: var(--secondary);
  font-weight: 600;
`;

export const ReviewText = styled(Text)`
  line-height: 26px;
  size: 16px;
  color: var(--secondary);
  font-weight: 400;
  margin-top: 1.7rem;
`;

export const HeaderDiv = styled.div``;

export const HeaderMain = styled(Heading)`
  font-size: 40px;
  font-weight: 700;
  line-height: 48.41px;
  color: var(--primary);
  margin-bottom: 2rem;
`;

export const HeaderSub = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  width: 70%;
  color: var(--secondary);
`;

export const HeaderSub2 = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  width: 33%;
  margin-left: 33%;
  color: var(--secondary);
`;
