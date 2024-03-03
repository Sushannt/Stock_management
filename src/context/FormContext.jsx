import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <FormContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </FormContext.Provider>
  );
};
