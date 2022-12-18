import InputCard from "app/components/atoms/input-card/input-card.component";
import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 18px;
  color: #737373;
`;

const Search = ({ iconColor, setSearchInput }) => {
  return (
    <InputCard iconColor={iconColor}>
      <AiOutlineSearch />
      <Input placeholder="Search" type="text" onChange={(e) => setSearchInput(e.target.value)} />
    </InputCard>
  );
};

export default Search;
