import { createContext } from "react";

export const authContext = createContext();

const login = () => {
  alert("Logging in");
};

const AuthProvider = ({ children }) => {
  const values = {
    login,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthProvider;
