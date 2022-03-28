import { useContext } from 'react';
import { RiCloseFill, RiMoonClearFill, RiSunLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import RenderIf from 'components/RenderIf';
import { NavigationLinks, SocialLinks } from 'config/header.config';
import { ThemeStateContext, ThemeStateContextType } from 'theme/ThemeProvider';
import useLocale from 'translations/hooks';

import * as S from './MobileMenu.styles';
import { MobileMenuContext, MobileMenuContextStateType } from './MobileMenuProvider';

const MobileMenu = () => {
  const { region } = useLocale();
  const { changeTheme, currentTheme } = useContext(ThemeStateContext) as ThemeStateContextType;

  const { isMenuOpen, changeMenuVisibility } = useContext(
    MobileMenuContext
  ) as MobileMenuContextStateType;

  return (
    <RenderIf isTrue={isMenuOpen}>
      <S.Background>
        <S.MobileMenuWrapper>
          <S.Settings>
            <RenderIf isTrue={currentTheme === 'light'}>
              <RiSunLine onClick={changeTheme} />
            </RenderIf>

            <RenderIf isTrue={currentTheme === 'dark'}>
              <RiMoonClearFill onClick={changeTheme} />
            </RenderIf>

            {region}

            <RiCloseFill onClick={changeMenuVisibility} />
          </S.Settings>

          <S.HorizontalSeparator />

          <S.NavigationMenu>
            {NavigationLinks().map(({ title, link }) => (
              <S.MenuItem key={link}>
                <Link to={link}>{title}</Link>
              </S.MenuItem>
            ))}
          </S.NavigationMenu>

          <S.HorizontalSeparator />

          <S.MenuItem>
            {SocialLinks.map(({ Icon, name, link }) => (
              <a key={name} href={link} target="blank">
                <Icon />
              </a>
            ))}
          </S.MenuItem>
        </S.MobileMenuWrapper>
      </S.Background>
    </RenderIf>
  );
};

export default MobileMenu;
