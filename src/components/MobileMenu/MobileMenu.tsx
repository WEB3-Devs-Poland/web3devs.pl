import useIPFSNavigate from 'providers/IPFSRouter/hooks/useIPFSNavigate';
import { MobileMenuContext, MobileMenuContextStateType } from 'providers/MobileMenuProvider';
import { useContext } from 'react';
import { RiCloseFill } from 'react-icons/ri';

import ChangeLanguage from 'components/ChangeLanguage';
import ChangeTheme from 'components/ChangeTheme';
import { NavigationLinks, SocialLinks } from 'components/Header/header.config';
import RenderIf from 'components/RenderIf';

import * as S from './MobileMenu.styles';

const MobileMenu = () => {
  const navigate = useIPFSNavigate();
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
          {NavigationLinks().map(({ title, link }) => (
            <p key={title} onClick={() => mobileNavigate(link)}>
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
