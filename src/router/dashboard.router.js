import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};
