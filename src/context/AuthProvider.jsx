import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialState = sessionStorage.getItem("auth")
    ? JSON.parse(sessionStorage.getItem("auth"))
    : null;

  const [auth, setAuth] = useState(initialState);

  const login = (userData) => {
    setAuth(userData);
    sessionStorage.setItem("auth", JSON.stringify(userData));
  };

  const logout = () => {
    setAuth(null);
    sessionStorage.removeItem("auth");
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
