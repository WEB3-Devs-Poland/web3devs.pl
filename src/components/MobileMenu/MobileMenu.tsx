import { MobileMenuContext, MobileMenuContextStateType } from 'providers/MobileMenuProvider';
import { useContext } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

import ChangeLanguage from 'components/ChangeLanguage';
import ChangeTheme from 'components/ChangeTheme';
import { NavigationLinks, SocialLinks } from 'components/Header/header.config';
import RenderIf from 'components/RenderIf';

import * as S from './MobileMenu.styles';

const MobileMenu = () => {
  const navigate = useNavigate();
  const { isMenuOpen, changeMenuVisibility } = useContext(
    MobileMenuContext
  ) as MobileMenuContextStateType;

  const mobileNavigate = (link: string) => {
    changeMenuVisibility();
    navigate(link);
  };

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
          {NavigationLinks().map(({ title, link, isBlank }) => (
            <p
              key={title}
              onClick={() => (isBlank ? window.open(link, '_blank') : mobileNavigate(link))}
            >
              {title}
            </p>
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
