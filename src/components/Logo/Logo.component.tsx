import { PropsWithChildren, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import LogoDark from 'assets/logo/dark.png';
import LogoLight from 'assets/logo/light.png';
import { ThemeStateContext, ThemeStateContextType } from 'theme/Theme.provider';

import * as S from './Logo.styles';

export type LogoProps = PropsWithChildren & {};

export const Logo: React.FC<LogoProps> = () => {
  const navigate = useNavigate();

  const { isDarkTheme } = useContext(ThemeStateContext) as ThemeStateContextType;

  return (
    <S.Wrapper>
      <S.Logo src={isDarkTheme ? LogoLight : LogoDark} onClick={() => navigate('/')} />
    </S.Wrapper>
  );
};
