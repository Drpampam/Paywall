import { forwardRef } from "react";
import {
  DropdownContainer,
  ProfileDropdownContainer,
  UserName,
} from "./user-profile.styles";
import Dropdown from "app/components/atoms/dropdown/dropdown.component";
import { useNavigate } from "react-router-dom";
import { useStore } from "store";
import Ellipse21 from "app/assets/svg/Ellipse21.svg";

const UserProfile = forwardRef(({options, onChange, open }, ref) => {
  const navigate = useNavigate();
  const {authStore} = useStore()

  const logOutUser = () => {
    authStore.logout()
    navigate("/");
  };

  
  return (
    <DropdownContainer onClick={onChange} ref={ref}>
      <ProfileDropdownContainer active={open}>
        <img
          src={Ellipse21}
          alt=""
        />
        <UserName>{authStore.user.firstName}</UserName>
        {open && <Dropdown options={options} handleLogout={logOutUser} />}
      </ProfileDropdownContainer>
    </DropdownContainer>
  );
});

export default UserProfile;
