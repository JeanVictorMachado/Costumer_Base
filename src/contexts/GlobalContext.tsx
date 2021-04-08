import React, { createContext, useState } from 'react';

type ContextProps = {
  stateEmail: string;
  setStateEmail: React.Dispatch<React.SetStateAction<string>>;
  stateUpdate: boolean;
  setStateUpdate: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GlobalContext = createContext<ContextProps>({} as ContextProps);

export const GlobalProvider: React.FC = ({ children }) => {
  const [stateEmail, setStateEmail] = useState<string>('');
  const [stateUpdate, setStateUpdate] = useState<boolean>(false);

  const context = {
    stateEmail,
    setStateEmail,
    stateUpdate,
    setStateUpdate,
  };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
};
