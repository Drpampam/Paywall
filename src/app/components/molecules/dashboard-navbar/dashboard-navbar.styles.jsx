import styled from "styled-components";
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f5f5f5;
  border-bottom: #f5f5f5;
  height: 96px;
  align-items: center;
  padding: 28px 146px;
  position: sticky;
  top:0;
  z-index: 5;

  .dashboard-nav__notification-container {
    display: flex;
    align-items: center;
    gap: 31px;
  }

  .dashboard-nav__profile {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 150px;
  }

  .dashboard-nav__profile-picture {
    width: 40px;
    height: 40px;
    border-radius: 50%;

    img {
      width: 100%;
    }
  }

  .dashboard-nav__profile-name {
    width: auto;
    margin-left: 2px;
  }

  .dashboard-nav__notification {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export const UsernameDropDownArea = styled.div`
  border-left: 1px solid #b8c6e4;
  padding: 0 33px;
  width: 27%;
  display: flex;
  align-items: center;
`;