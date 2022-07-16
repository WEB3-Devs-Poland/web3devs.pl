import { PropsWithChildren } from 'react';

import { Button } from 'components/Button';
import { ChangeLanguage } from 'components/ChangeLanguage';
import { Logo } from 'components/Logo';
import { Translation } from 'components/Translation';

import { navigation } from './Menu.navigation';
import * as S from './Menu.styles';

export type MenuProps = PropsWithChildren & {};

export const Menu: React.FC<MenuProps> = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <Logo />

        <S.Menu>
          {navigation.map((link) => (
            <Button type="link">
              <Translation translationKey={link.translationKey} />
            </Button>
          ))}

          <S.VerticalSeparator />

          <ChangeLanguage />
        </S.Menu>
      </S.Content>
    </S.Wrapper>
  );
};
