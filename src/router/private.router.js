import { observer } from "mobx-react-lite";
import React from "react";
import { Navigate, Outlet } from "react-router-dom"
import { useStore } from "store";
import { useLocation } from "react-router-dom";

const PrivateRoutes = () => {
  const location = useLocation();
  const {authStore}  = useStore();
 return authStore.isAuthenticated ? <Outlet /> : <Navigate to="/login" replace state = {{from: location}} />;

};

export default observer(PrivateRoutes);