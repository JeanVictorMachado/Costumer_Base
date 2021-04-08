import React, { createContext, useState } from 'react';

type ContextProps = {
  stateEmail: string;
  setStateEmail: React.Dispatch<React.SetStateAction<string>>;
};

export const GlobalContext = createContext<ContextProps>({} as ContextProps);

export const GlobalProvider: React.FC = ({ children }) => {
  const [stateEmail, setStateEmail] = useState<string>('');

  const context = {
    stateEmail,
    setStateEmail,
  };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
};
