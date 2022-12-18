import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LOGOUT } from "utils/constants/constants.utils";
import { Span } from "../typography";

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  padding: 0;
  margin: 0;
  background: #fff;
  position: absolute;
  top: 90%;
  width: 250px;
  border-radius: 3px;
  animation: pulse 0.5s;
  z-index: 1000;

  span {
    display: inline-block;
    vertical-align: sub;
    width: auto;
    margin 0.5rem 0;
  }

  li:hover {
    background: #e5e5e5;
  }

  i {
      margin-right: 0.5rem;
  }

  li {
    padding: 6px 20px;
    list-style-type: none;
  }

  ul {
    list-style-type: none;
    all: unset;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

`;

const Dropdown = ({ options, handleLogout }) => {
  const navigate = useNavigate();
  const handleClick = (option) => () => {
    if (option.value === LOGOUT) {
      handleLogout();
    } else {
      navigate("/profile");
    }
  };

  return (
    <DropdownContainer>
      <ul>
        {options.map((option, index) => (
          <li onClick={handleClick(option)} key={index}>
            <Span size={18}>
              <i>{option?.icon}</i>
              {option.label}
            </Span>
          </li>
        ))}
      </ul>
    </DropdownContainer>
  );
};

export default Dropdown;
