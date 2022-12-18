import React from "react";
import { FaRegBell } from "react-icons/fa";
import { NavbarContainer } from "./dashboard-navbar.styles";
import "./dashboard-navbar.styles.jsx";
import { Logo } from "../logo/logo.component";
import { useNavigate } from "react-router-dom/dist";
import { useOnClickOutside } from "hooks/useOnClickOutside";
import UserProfile from "../user-profile/user-profile.component";
import { MdSupportAgent } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

const options = [
  {
    label: "Profile",
    value: "helpAndSupport",
    icon: <MdSupportAgent />,
  },
  { label: "Logout", value: "logout", icon: <FiLogOut /> },
];

const DashboardNavbar = () => {
  let navigate = useNavigate();
  const { visible, setVisible, ref } = useOnClickOutside(false);
  return (
    <NavbarContainer>
      <Logo handleClick={() => navigate("/")} />
      <div className="dashboard-nav__notification-container">
        <div className="dashboard-nav__notification">
          <FaRegBell />
        </div>
        <div className="dashboard-nav__profile">
          <UserProfile
            ref={ref}
            open={visible}
            onChange={() => setVisible(!visible)}
            options={options}
          />
        </div>
      </div>
    </NavbarContainer>
  );
};

export default DashboardNavbar;
