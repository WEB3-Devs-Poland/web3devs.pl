import { useContext } from 'react';

import darkThemeLogo from 'assets/logo/web3-dark-theme.png';
import lightThemeLogo from 'assets/logo/web3-light-theme.png';
import { ThemeStateContext, ThemeStateContextType } from 'theme/ThemeProvider';

import * as S from './Logo.styles';

const Logo = () => {
  const { currentTheme } = useContext(ThemeStateContext) as ThemeStateContextType;

  return (
    <S.LogoWrapper>
      <img
        src={currentTheme === 'light' ? lightThemeLogo : darkThemeLogo}
        alt="WEB3 Devs Poland Logo"
      />
    </S.LogoWrapper>
  );
};

export default Logo;
