import { Outlet, Navigate, useLocation } from "react-router-dom";
//auth context
import useAuth from "../hooks/useAuth";

const ProtectRoute = () => {
  const location = useLocation();
  const { auth } = useAuth();

  return auth ? <Outlet /> : <Navigate to="/login" from={location} replace />;
};

export default ProtectRoute;
