import {
  FooterContent,
  FooterIcons,
  FooterTerms,
} from "app/assets/data/data.jsx";

import React from "react";
import {
  FooterContainer,
  FooterTop,
  FooterLogo,
  FooterImg,
  FooterNav,
  FooterListUnordered,
  FooterUnordered,
  FooterList,
  FooterIconsDiv,
  FooterItems,
  FooterItemsIcon,
  FooterIcon,
  FooterBottom,
  FooterRights,
  FooterReghtsReserve,
  FooterVersionDiv,
  FooterVersion,
  FooterTerm,
} from "./footer.styles";
import picture from "app/assets/img/Fintech.africa.png";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterTop>
          <FooterLogo>
            <FooterImg
              url={picture}
              altName="Logo"
            />
          </FooterLogo>
          <FooterNav>
            <FooterListUnordered>
              {FooterContent.map((el, i) => {
                const { name } = el;
                return <FooterList key={`${i}${name}`}>{name}</FooterList>;
              })}
            </FooterListUnordered>
          </FooterNav>
          <FooterIconsDiv>
            {FooterIcons.map((el, i) => {
              const { icon, id } = el;
              return (
                <FooterItems>
                  <FooterItemsIcon>
                    <FooterIcon key={`${i}${id}`}>{icon}</FooterIcon>
                  </FooterItemsIcon>
                </FooterItems>
              );
            })}
          </FooterIconsDiv>
        </FooterTop>
        <FooterBottom>
          <FooterRights>
            <FooterReghtsReserve>
              &copy; 2022 All rights reserved
            </FooterReghtsReserve>
          </FooterRights>
          <FooterNav>
            <FooterUnordered>
              {FooterTerms.map((el, i) => {
                const { id, name } = el;
                return <FooterTerm key={`${i}${id}`}>{name}</FooterTerm>;
              })}
            </FooterUnordered>
          </FooterNav>
          <FooterVersionDiv>
            <FooterVersion>English Version</FooterVersion>
          </FooterVersionDiv>
        </FooterBottom>
      </FooterContainer>
    </>
  );
};

export default Footer;
