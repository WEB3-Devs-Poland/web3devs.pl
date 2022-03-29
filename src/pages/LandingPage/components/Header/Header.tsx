import {
  MobileMenuContext,
  MobileMenuContextStateType,
} from 'pages/LandingPage/providers/MobileMenuProvider';
import { useCallback, useContext, useState } from 'react';
import { RiMenuFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import ChangeLocale from 'components/ChangeLocale';
import ChangeTheme from 'components/ChangeTheme';
import Logo from 'components/Logo';
import RenderIf from 'components/RenderIf';
import { NavigationLinks, SocialLinks } from 'config/header.config';
import useWindowChangeEvent from 'hooks/useWindowChangeEvent';

import * as S from './Header.styles';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const { changeMenuVisibility } = useContext(MobileMenuContext) as MobileMenuContextStateType;

  const updateWindowWidth = useCallback(() => setWindowWidth(window.innerWidth), []);

  useWindowChangeEvent(updateWindowWidth, true);

  return (
    <S.HeaderWrapper>
      <Logo />

      <RenderIf isTrue={windowWidth > 800}>
        <S.MenuWrapper>
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

          <S.Settings>
            <ChangeLocale />
            <ChangeTheme />
          </S.Settings>
        </S.MenuWrapper>
      </RenderIf>

      <RenderIf isTrue={windowWidth < 800}>
        <S.Mobile>
          <RiMenuFill onClick={changeMenuVisibility} />
        </S.Mobile>
      </RenderIf>
    </S.HeaderWrapper>
  );
};

export default Header;
