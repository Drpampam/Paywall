import Image from "app/components/atoms/image/image.component";
import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: var(--secondary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 3rem 7rem;
  height: 12rem;
`;
export const FooterTop = styled.div`
color: var(--white);
display: flex;
flex-direction: row;
justify-content: space-between;
font-weight: 600;
font-style: normal;
font-size: 16px;
line-height: 26px;
`;

export const FooterLogo = styled.div`

`;

export const FooterImg = styled(Image)`
    width: 163px;
    height: 20px;
`;

export const FooterNav = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 50%;
align-items: center;
text-align: center;
`;

export const FooterUnordered = styled.ul`
display: flex;
flex-direction: row;
`;

export const FooterListUnordered = styled.ul`
display: flex;
flex-direction: row;
margin-left: 5%;
`;


export const FooterList = styled.li`
list-style: none;
padding: 0 2rem;
`;

export const FooterTerm = styled.div`
list-style: none;
padding: 0 2rem;
`;

export const FooterIconsDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const FooterItems = styled.div`

`;

export const FooterItemsIcon = styled.div`
margin: 0 .5rem;
color: var(--white);
font-size: 20px;
`;

export const FooterIcon = styled.div`

`;

export const FooterBottom = styled.div`
color: var(--white);
display: flex;
flex-direction: row;
justify-content: space-between;
font-size: 14px;
font-weight: 400;
line-height: 22px;
font-style: normal;
`;

export const FooterRights = styled.div`
`;

export const FooterReghtsReserve = styled.div`

`;

export const FooterVersionDiv = styled.div`

`;

export const FooterVersion = styled.div`

`;