import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingScreen from "./LoadingScreen";

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const { isAuthenticated, role, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/conta"
        replace
        state={{
          from: location.pathname,
          sessionExpired: true,
        }}
      />
    );
  }

  const isAdmin = role === "admin";
  const isColaborador = role === "colaborador";

  if (location.pathname.startsWith("/admin") && !isAdmin) {
    return <Navigate to="/conta" replace />;
  }

  if (location.pathname.startsWith("/logs") && !isAdmin) {
    return <Navigate to="/conta" replace />;
  }

  if (
    location.pathname.startsWith("/colaborador") &&
    !isAdmin &&
    !isColaborador
  ) {
    return <Navigate to="/conta" replace />;
  }

  return children;
}
