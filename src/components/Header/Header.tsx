import { Link } from 'react-router-dom';

import Logo from 'components/Logo';

import { NavigationLinks, SocialLinks } from './Header.config';
import * as S from './Header.styles';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <Logo />

      <S.LinksWrapper>
        <S.Links>
          {NavigationLinks.map(({ title, link }) => (
            <Link key={link} to={link}>
              {title}
            </Link>
          ))}
        </S.Links>

        <S.Social>
          {SocialLinks.map(({ Icon, name, link }) => (
            <a key={name} href={link} target="blank">
              <Icon />
            </a>
          ))}
        </S.Social>
      </S.LinksWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
