import { Outlet } from 'react-router-dom';

import * as S from './Layout.styles';

export const Layout: React.FC = () => {
  return (
    <S.LayoutWrapper>
      <Outlet />
    </S.LayoutWrapper>
  );
};
