import { PropsWithChildren } from 'react';

import { Logo } from 'components/Logo';

import * as S from './Menu.styles';

export type MenuProps = PropsWithChildren & {};

export const Menu: React.FC<MenuProps> = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <Logo />
      </S.Content>
    </S.Wrapper>
  );
};
