import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);
const token = localStorage.getItem("token");

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isUserLoggedIn: token ? true : false,
  });
  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
