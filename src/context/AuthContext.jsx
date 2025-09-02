import React, { createContext, useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);

      try {
        const decoded = jwtDecode(storedToken);
        setUser(decoded); 
      } catch (err) {
        console.error("Invalid token", err);
      }
    }
  }, []);

  const login = (userToken) => {
    setToken(userToken);
    setIsLoggedIn(true);
    localStorage.setItem("authToken", userToken);

    try {
      const decoded = jwtDecode(userToken);
      setUser(decoded);
    } catch (err) {
      console.error("Invalid token", err);
    }
  };

  const logout = () => {
    setToken(null);
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
