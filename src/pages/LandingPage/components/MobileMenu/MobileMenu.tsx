import { NavigationLinks, SocialLinks } from 'pages/LandingPage/components/Header/header.config';
import { useContext } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import ChangeLanguage from 'components/ChangeLanguage';
import ChangeTheme from 'components/ChangeTheme';
import RenderIf from 'components/RenderIf';

import { MobileMenuContext, MobileMenuContextStateType } from '../../providers/MobileMenuProvider';
import * as S from './MobileMenu.styles';

const MobileMenu = () => {
  const { isMenuOpen, changeMenuVisibility } = useContext(
    MobileMenuContext
  ) as MobileMenuContextStateType;

  return (
    <RenderIf isTrue={isMenuOpen}>
      <S.MobileMenu>
        <S.Shortcuts>
          <ChangeTheme />
          <ChangeLanguage />
          <RiCloseFill onClick={changeMenuVisibility} />
        </S.Shortcuts>

        <S.HorizontalSeparator />

        <S.Navigation>
          {NavigationLinks().map(({ title, link }) => (
            <Link to={link} key={link}>
              {title}
            </Link>
          ))}
        </S.Navigation>

        <S.HorizontalSeparator />

        <S.Shortcuts>
          {SocialLinks.map(({ Icon, name, link }) => (
            <a key={name} href={link} target="blank">
              <Icon />
            </a>
          ))}
        </S.Shortcuts>
      </S.MobileMenu>
    </RenderIf>
  );
};

export default MobileMenu;
