import { createContext, useState } from "react";

export const UserNameContext = createContext();

const UserNameProvider = ({ children }) => {
  const [userName, setUserName] = useState("Gest");

  const userNameValue = {
    userName,
    setUserName,
  };

  return (
    <UserNameContext.Provider value={userNameValue}>
      {children}
    </UserNameContext.Provider>
  );
};

export default UserNameProvider;
