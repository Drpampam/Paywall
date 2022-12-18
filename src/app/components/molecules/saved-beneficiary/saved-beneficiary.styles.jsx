import Button from "app/components/atoms/button/button.component";
import Text from "app/components/atoms/typography";
import styled from "styled-components";

export const BeneficiaryList = styled.ul`
    list-style-type: none;
`;

export const BeneficiaryDetail = styled.li`
    
`;


export const Beneficiary = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
height: 35px;
background-color: var(--white);
padding: .5rem 0 .5rem .5rem;
margin: 1rem 0;
border-radius: 5px;
border: var(--border-2);
`;

export const BeneficiaryBank = styled.div`
width: 30%;
`;

export const BeneficiaryName = styled.div`
width: 30%;
`;

export const BeneficiaryNumber = styled.div`
width: 30%;
padding-left: 5%;
`;

export const BeneficiaryPage = styled.div`

`;


export const BankName = styled(Text)`
color: var(--secondary);
font-size: 1rem;
font-weight: 500;
`;


export const AccountName = styled(Text)`
white-space: nowrap;
text-overflow:  clip;
overflow: hidden;
`;


export const AccountNumber = styled(Text)`
`;

export const SelectButton = styled(Button)`
height: 20%;
width: 70px;
font-size: 13px;
`;