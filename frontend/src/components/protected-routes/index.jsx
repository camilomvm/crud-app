import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthTokenManager from "../../helpers/AuthTokenManager";

const ProtectedRoute = ({isPublic}) => {
  const isAuthenticated = AuthTokenManager.get();

  if (isPublic && isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  if (!isPublic && !isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;

};

export default ProtectedRoute;
