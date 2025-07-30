import React, { createContext, useState, useEffect } from "react";

// ✅ MUST export AuthContext by name
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // check localStorage on page load
  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    if (storedLogin === "true") setIsLoggedIn(true);
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
