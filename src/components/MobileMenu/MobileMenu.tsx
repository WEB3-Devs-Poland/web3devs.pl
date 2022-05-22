import { MobileMenuContext, MobileMenuContextStateType } from 'providers/MobileMenuProvider';
import React, { useContext } from 'react';
import { RiCloseFill } from 'react-icons/ri';

import ChangeLanguage from 'components/ChangeLanguage';
import ChangeTheme from 'components/ChangeTheme';
import { NavigationLinks, SocialLinks } from 'components/Header/header.config';
import RenderIf from 'components/RenderIf';
import { goToSection } from 'utilities/goToSection';

import * as S from './MobileMenu.styles';

const MobileMenu = () => {
  const { isMenuOpen, changeMenuVisibility } = useContext(
    MobileMenuContext
  ) as MobileMenuContextStateType;

  const goToMobileSection = (link: string) => {
    changeMenuVisibility();
    goToSection(link);
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
          {NavigationLinks().map(({ title, link, componentType }) => (
            <React.Fragment key={link}>
              {componentType === 'section' ? (
                <p onClick={() => goToMobileSection(link)}>{title}</p>
              ) : (
                <p onClick={() => goToSection(link)}>{title}</p>
              )}
            </React.Fragment>
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
