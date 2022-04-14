import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);
const token = localStorage.getItem("token");

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isUserLoggedIn: false,
    token: "",
  });
  console.log(user);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
