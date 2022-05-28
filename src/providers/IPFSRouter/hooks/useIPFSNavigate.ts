import { useContext } from 'react';

import { RouterProviderContext, RouterProviderContextStateType } from '../IPFSRouterProvider';

const useIPFSNavigate = () => {
  const { setCurrentPath } = useContext(RouterProviderContext) as RouterProviderContextStateType;

  return (pathName: string) => setCurrentPath(pathName);
};

export default useIPFSNavigate;
