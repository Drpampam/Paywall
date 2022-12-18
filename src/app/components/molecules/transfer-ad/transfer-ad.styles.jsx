import Text from "app/components/atoms/typography";
import styled from "styled-components";

export const TransferAdContainer = styled.div`
  background-color: var(--background--primary);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 5rem 7rem 5rem 7rem;
`;


export const RightPane = styled.div`
  width: 100%;
  margin-top: 4rem;
  height: 100%;
  padding-left: 8rem;
`;

export const CustomText = styled(Text)`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

export const TextContainer = styled.div`
  margin-top: 6rem;
  width: 100%;
`;

export const LeftPane = styled.div`
  width: 100%;

  .cardImg {
    width: 100%;
    height: 300px;
  }
`;


