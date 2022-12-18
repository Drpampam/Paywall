import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom/dist/index.js";

export const TabsArea = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem 7rem 2rem 7rem;
  border-style: solid;
  border-width: 0.5px;
  border-color: #012a4a;
  margin: 20px 0;
  gap: 50px;

  button {
    padding: 16px 69px;
    color: #012a4a;
    font-weight: 600;
    width: 204px;
    cursor: pointer;
  }

  .btn-transfer {
    background-color: #4361ee4d;
    border: none;
  }
`;

const DashboardTabs = () => {
  let navigate = useNavigate();

  return (
    <TabsArea>
      <button className="btn-transfer" onClick={() => navigate("/transfer")}>
        Transfer
      </button>
      <button className="btn-profile" onClick={() => navigate("/profile")}>
        Profile
      </button>
    </TabsArea>
  );
};

export default DashboardTabs;
