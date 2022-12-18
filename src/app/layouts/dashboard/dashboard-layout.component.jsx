import DashboardNavbar from "app/components/molecules/dashboard-navbar/dashboard-navbar.component";
import styled from "styled-components/macro";
import { pxToRem } from "utils/helpers/px-to-rem/pxToRem";

export const Container = styled.div`
  background-color: #e5e5e5;
  .container {
    max-width: 702px;
  }
`;

const DashboardLayout = ({ children }) => {
  return (
    <>
      <DashboardNavbar />
      <Container>
        <div style={{ paddingTop: pxToRem(40), paddingBottom: pxToRem(24) }} className="container">
          {children}
        </div>
      </Container>
    </>
  );
};

export default DashboardLayout;
