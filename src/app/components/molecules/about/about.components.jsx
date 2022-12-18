import Header from "app/components/atoms/header/header.component";
import Image from "app/components/atoms/image/image.component";
import picture from "app/assets/img/customer2.png";
import {
  AboutDiv,
  AboutTop,
  AboutTopCard,
  AboutCard,
  CardAnchor,
  CardAnchorCircle,
  CardAnchorInner,
  CardAnchorLine,
  AboutCardItems,
  AboutCardLabel,
  AboutCardTitle,
  AboutCardText,
  AboutTopText,
  AboutTopImg,
  AboutMid,
  AboutBottom,
  AboutBottomCard,
  ReviewItems,
  ReviewItemCard,
  ReviewName,
  ReviewText,
  HeaderDiv,
  HeaderMain,
  HeaderSub,
  HeaderSub2,
} from "./about.styles";
import {
  instructItems,
  reviewItems,
  headerItems,
  headerItems2,
} from "app/assets/data/data";

const About = () => {
  return (
    <>
      <AboutDiv>
        <AboutTop>
          <AboutTopText>
            <Header justify-content={"space-between"} textAlign={"left"}>
              {headerItems.map((el) => {
                const { headingText, subText } = el;
                return (
                  <HeaderDiv>
                    <HeaderMain>{headingText}</HeaderMain>
                    <HeaderSub>{subText}</HeaderSub>
                  </HeaderDiv>
                );
              })}
            </Header>
            <AboutTopCard>
              {instructItems.map((el, i) => {
                const { id, title, comment } = el;
                return (
                  <AboutCard>
                    <CardAnchor>
                      <CardAnchorCircle>
                        <CardAnchorInner></CardAnchorInner>
                      </CardAnchorCircle>
                      <CardAnchorLine></CardAnchorLine>
                    </CardAnchor>
                    <AboutCardItems key={id}>
                      <AboutCardLabel>STEP {id}</AboutCardLabel>
                      <AboutCardTitle>{title}</AboutCardTitle>
                      <AboutCardText>{comment}</AboutCardText>
                    </AboutCardItems>
                  </AboutCard>
                );
              })}
            </AboutTopCard>
          </AboutTopText>
          <AboutTopImg>
            <Image className="Images" url={picture} altName="How It Works" />
          </AboutTopImg>
        </AboutTop>
        <AboutMid>
          <Header justify-content={"space-between"}>
            {headerItems2.map((el) => {
              const { headingText, subText } = el;
              return (
                <HeaderDiv>
                  <HeaderMain>{headingText}</HeaderMain>
                  <HeaderSub2>{subText}</HeaderSub2>
                </HeaderDiv>
              );
            })}
          </Header>
        </AboutMid>
        <AboutBottom>
          <AboutBottomCard>
            {reviewItems.map((el, i) => {
              const { id, fullName, comment } = el;
              return (
                <ReviewItemCard>
                  <ReviewItems key={id}>
                    <ReviewName>{fullName}</ReviewName>
                    <ReviewText>{comment}</ReviewText>
                  </ReviewItems>
                </ReviewItemCard>
              );
            })}
          </AboutBottomCard>
        </AboutBottom>
      </AboutDiv>
    </>
  );
};

export default About;
