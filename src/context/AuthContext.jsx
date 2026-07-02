import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import authService from "../services/authService";

const AuthContext = createContext(null);

function roleFromType(type) {
  if (type === "Gerente") return "admin";
  if (type === "Colaborador") return "colaborador";
  return "user";
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMe = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await authService.getMe();
      setUser(data.user ?? data);
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMe();
  }, [fetchMe]);

  const setAuthFromLogin = useCallback((loggedUser) => {
    setUser(loggedUser);
    setIsLoading(false);
  }, []);

  const logout = useCallback(async () => {
    try {
      await authService.logout();
    } finally {
      setUser(null);
    }
  }, []);

  const value = {
    user,
    role: user ? roleFromType(user.type) : null,
    isAuthenticated: !!user,
    isLoading,
    refetch: fetchMe,
    setAuthFromLogin,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return ctx;
}
