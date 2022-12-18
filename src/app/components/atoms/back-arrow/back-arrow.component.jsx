import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  left: 0;
  top: -30px;
  cursor: pointer;
  font-weight: 550;
`;

const BackArrow = ({ handleReturn }) => {
  return (
    <Wrapper onClick={handleReturn}>
      <BiArrowBack size={24} />
      Go Back
    </Wrapper>
  );
};

export default BackArrow;
