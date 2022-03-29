import { useContext } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import ChangeLocale from 'components/ChangeLocale';
import ChangeTheme from 'components/ChangeTheme';
import RenderIf from 'components/RenderIf';
import { NavigationLinks, SocialLinks } from 'config/header.config';

import { MobileMenuContext, MobileMenuContextStateType } from '../../providers/MobileMenuProvider';
import * as S from './MobileMenu.styles';

const MobileMenu = () => {
  const { isMenuOpen, changeMenuVisibility } = useContext(
    MobileMenuContext
  ) as MobileMenuContextStateType;

  return (
    <RenderIf isTrue={isMenuOpen}>
      <S.Background>
        <S.MobileMenuWrapper>
          <S.Settings>
            <ChangeTheme />

            <ChangeLocale />

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

          <S.Social>
            {SocialLinks.map(({ Icon, name, link }) => (
              <a key={name} href={link} target="blank">
                <Icon />
              </a>
            ))}
          </S.Social>
        </S.MobileMenuWrapper>
      </S.Background>
    </RenderIf>
  );
};

export default MobileMenu;
