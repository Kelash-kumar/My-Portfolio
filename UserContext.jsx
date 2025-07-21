/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children, user }) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
