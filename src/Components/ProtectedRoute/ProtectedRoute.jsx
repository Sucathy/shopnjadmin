import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("auth-token");

  return isAuthenticated ? children : <Navigate to="/user" />;
};

export default ProtectedRoute;
