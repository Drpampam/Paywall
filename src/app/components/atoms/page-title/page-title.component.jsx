import Text from "app/components/atoms/typography";

import styled from "styled-components/macro";

export const PageTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.08);
  padding: 16px;
`;

const PageTitle = ({text}) => {
  return (
    <PageTitleContainer>
      <Text size={18} weight={600}>
        {text}
      </Text>
    </PageTitleContainer>
  );
};

export default PageTitle;
