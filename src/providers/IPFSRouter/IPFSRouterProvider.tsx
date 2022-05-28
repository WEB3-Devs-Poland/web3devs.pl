import { ReactNode, createContext, useState } from 'react';

export type RouterProviderContextStateType = {
  currentPath: string;
  setCurrentPath: (pathName: string) => void;
};

export const RouterProviderContext = createContext<RouterProviderContextStateType | null>(null);

interface Props {
  children: ReactNode;
}

const IPFSRouterProvider = ({ children }: Props) => {
  const [currentPath, setCurrentPath] = useState('/');

  return (
    <RouterProviderContext.Provider value={{ currentPath, setCurrentPath }}>
      {children}
    </RouterProviderContext.Provider>
  );
};

export default IPFSRouterProvider;
