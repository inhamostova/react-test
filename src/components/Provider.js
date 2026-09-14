import { createContext } from 'react';

export const MyContext = createContext();

export const Provider = ({ children }) => {
  const x = { name: 'Inga' };
  return <MyContext.Provider value={x}>{children}</MyContext.Provider>;
};
