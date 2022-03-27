import { useContext } from 'react';
import { RiMenuFill, RiMoonClearFill, RiSunLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import Logo from 'components/Logo';
import RenderIf from 'components/RenderIf';
import { ThemeStateContext, ThemeStateContextType } from 'theme/ThemeProvider';

import { NavigationLinks, SocialLinks } from './Header.config';
import * as S from './Header.styles';

const Header = () => {
  const { changeTheme, currentTheme } = useContext(ThemeStateContext) as ThemeStateContextType;

  return (
    <S.HeaderWrapper>
      <Logo />

      <RenderIf isTrue={window.innerWidth > 800}>
        <S.MenuWrapper>
          {NavigationLinks.map(({ title, link }) => (
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
            EN
            {currentTheme === 'light' ? (
              <RiSunLine onClick={changeTheme} />
            ) : (
              <RiMoonClearFill onClick={changeTheme} />
            )}
          </S.Settings>
        </S.MenuWrapper>
      </RenderIf>

      <RenderIf isTrue={window.innerWidth < 800}>
        <S.Mobile>
          <RiMenuFill />
        </S.Mobile>
      </RenderIf>
    </S.HeaderWrapper>
  );
};

export default Header;
