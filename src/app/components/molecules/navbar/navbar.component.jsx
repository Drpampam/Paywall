// import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom/dist/index.js";
import { useStore } from "store";
import { navContent } from "app/assets/data/data.jsx";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "app/components/atoms/button/button.component.jsx";

import {
  NavbarContainer,
  NavbarBtn,
  LoginButton,
  NavbarList,
  NavbarNav,
  NavbarUnordered,
} from "./navbar.styles.jsx";
import { Logo } from "../logo/logo.component.jsx";

const Navbar = ({Login}) => {
  let navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  // const [check, setCheck] = useState([])

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("token"))
  //   if(items){
  //     setCheck(items)
  //   }
  // }, [])  
  const {authStore}  = useStore();
  const handleRegister = () => {
     navigate("/register")
 };
  const handleDashboard = () => {
     navigate("/dashboard") 
  };

  const goToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  }
  return (
    <>
      <NavbarContainer>
        <Logo handleClick={goToHome}/>
        <NavbarNav>
          <NavbarUnordered>
            {navContent.map((el, i) => {
              const { name, url } = el;
              return (
                <NavbarList className="active" to={url} key={`${i}${name}`}>
                  {name}
                </NavbarList>
              );
            })}
          </NavbarUnordered>
        </NavbarNav>
        
        {!authStore.isAuthenticated ?
        <NavbarBtn>
          {<LoginButton onClick={handleLogin}>Login</LoginButton> }
          <Button
            buttonType={BUTTON_TYPE_CLASSES.curved}
            onClick={handleRegister}
            width="400px"
          >
            {"Create an account" }
          </Button>
        </NavbarBtn> :
        <NavbarBtn>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.curved}
            onClick={handleDashboard}
            width="400px"
          >
            {"Dashboard" }
          </Button>
        </NavbarBtn>}
      </NavbarContainer>
    </>
  );
};

export default Navbar;
