import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

//auth context
import { AuthContext } from "../context/AuthContext";

const ProtectRoute = () => {
  const { userInfo } = useContext(AuthContext);

  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectRoute;
