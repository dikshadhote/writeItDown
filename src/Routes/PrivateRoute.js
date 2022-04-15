import React from "react";
import { useAuth } from "../Context/auth-context";
import { Navigate } from "react-router-dom";
export default function PrivateRoute({ navigateToPath }) {
  const { authState } = useAuth();

  return authState.isUserLoggedIn ? (
    navigateToPath
  ) : (
    <Navigate replace to="/login" />
  );
}
