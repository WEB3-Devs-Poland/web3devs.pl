import { useContext } from 'react';

import RenderIf from 'components/RenderIf';

import { RouterProviderContext, RouterProviderContextStateType } from './IPFSRouterProvider';

type IPFSRouteProps = {
  path: string;
  component: JSX.Element;
};

const IPFSRoute = ({ path, component }: IPFSRouteProps) => {
  const { currentPath } = useContext(RouterProviderContext) as RouterProviderContextStateType;

  return <RenderIf isTrue={currentPath === path}>{component}</RenderIf>;
};

export default IPFSRoute;
