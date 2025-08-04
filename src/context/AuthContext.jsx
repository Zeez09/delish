import React, { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  // ✅ Check localStorage on page load
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  // ✅ Login: store token + update state
  const login = (userToken) => {
    setToken(userToken);
    setIsLoggedIn(true);
    localStorage.setItem("authToken", userToken);
  };

  // ✅ Logout: clear token + update state
  const logout = () => {
    setToken(null);
    setIsLoggedIn(false);
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Helper hook for easy access
export const useAuth = () => useContext(AuthContext);
