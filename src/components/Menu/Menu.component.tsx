import { PropsWithChildren } from 'react';

import { Button } from 'components/Button';
import { ChangeLanguage } from 'components/ChangeLanguage';
import { Logo } from 'components/Logo';

import * as S from './Menu.styles';

export type MenuProps = PropsWithChildren & {};

export const Menu: React.FC<MenuProps> = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <Logo />

        <S.Links>
          <Button type="link">Społeczność</Button>
          <Button type="link">Blog</Button>
          <Button type="link">Praca</Button>

          <S.VerticalSeparator />

          <ChangeLanguage />
        </S.Links>
      </S.Content>
    </S.Wrapper>
  );
};
