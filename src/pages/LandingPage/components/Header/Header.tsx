import { NavigationLinks, SocialLinks } from 'pages/LandingPage/components/Header/header.config';
import {
  MobileMenuContext,
  MobileMenuContextStateType,
} from 'pages/LandingPage/providers/MobileMenuProvider';
import { useCallback, useContext, useState } from 'react';
import { RiMenuFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import darkThemeLogo from 'assets/logo/web3-dark-theme.png';
import lightThemeLogo from 'assets/logo/web3-light-theme.png';
import ChangeLanguage from 'components/ChangeLanguage';
import ChangeTheme from 'components/ChangeTheme';
import RenderIf from 'components/RenderIf';
import { basicTheme } from 'config/theme.config';
import useWindowChangeEvent from 'hooks/useWindowChangeEvent';
import { ThemeStateContext, ThemeStateContextType } from 'theme/ThemeProvider';

import * as S from './Header.styles';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const { currentTheme } = useContext(ThemeStateContext) as ThemeStateContextType;
  const { changeMenuVisibility } = useContext(MobileMenuContext) as MobileMenuContextStateType;

  const updateWindowWidth = useCallback(() => setWindowWidth(window.innerWidth), []);

  useWindowChangeEvent(updateWindowWidth, true);

  return (
    <S.Header>
      <S.Logo
        src={currentTheme === 'light' ? lightThemeLogo : darkThemeLogo}
        alt="WEB3 Devs Poland"
      />

      <RenderIf isTrue={windowWidth > basicTheme.maxWidth}>
        <S.Menu>
          {NavigationLinks().map(({ title, link }) => (
            <Link key={link} to={link}>
              {title}
            </Link>
          ))}

          <S.VerticalSeparator />

          {SocialLinks.map(({ Icon, name, link }) => (
            <a key={name} href={link} target="blank">
              <Icon />
            </a>
          ))}

          <S.VerticalSeparator />

          <ChangeLanguage />
          <ChangeTheme />
        </S.Menu>
      </RenderIf>

      <RenderIf isTrue={windowWidth < basicTheme.maxWidth}>
        <RiMenuFill onClick={changeMenuVisibility} />
      </RenderIf>
    </S.Header>
  );
};

export default Header;
