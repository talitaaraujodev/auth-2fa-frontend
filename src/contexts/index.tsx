import { createContext, useState, Dispatch, SetStateAction } from 'react';

export interface AppContextType {
  isSingIn: boolean;
  setIsSignIn: Dispatch<SetStateAction<boolean>>;
}
export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: any) => {
  const [isSingIn, setIsSignIn] = useState<boolean>(true);

  return (
    <AppContext.Provider
      value={{
        isSingIn,
        setIsSignIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
