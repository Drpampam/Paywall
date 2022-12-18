import styled from "styled-components";
import { Link } from "react-router-dom";
import Image from "app/components/atoms/image/image.component";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #fff;
  width: 100%;
  padding: 1rem;
  position: fixed;
  overflow: hidden;
  z-index: 1;
`;

export const NavbarLogo = styled.div`
  padding-top: 1rem;
  width: 15%;
`;

export const NavbarImg = styled(Image)`
  width: 163px;
  height: 20px;
  color: var(--black);
`;

export const NavbarNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
`;

export const NavbarUnordered = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-decoration: none;
  color: #012a4a;
  font-weight: 400;
  font-family: Inter;
  font-size: 15px;
`;

export const NavbarList = styled(Link)`
  text-decoration: none;
  list-style-type: none;
  padding: 0 2rem;
  color: var(--secondary);
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  align-item: center;

  // :hover {
  //   color: #4361ee;
  // }
`;

export const NavbarBtn = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  margin-bottom: 0.5rem;
`;

export const LoginButton = styled.button`
  width: 5rem;
  height: 2.5rem;
  background-color: #fff;
  border: 1px solid #fff;
  font-size: 14px;
  margin: 0 0.5rem;
  cursor: pointer;
`;
