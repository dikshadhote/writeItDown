import { createContext, useContext } from "react";
import { useState } from "react/cjs/react.production.min";
import { signUpHandler } from "../ApiServices/ApiServices";
const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);
const token = localStorage.getItem("token");

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isUserLoggedIn: token ? true : false,
    token: token,
  });
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
