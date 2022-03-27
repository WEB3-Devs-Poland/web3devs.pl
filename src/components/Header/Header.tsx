import Logo from 'components/Logo';

import { NavigationLinks, SocialLinks } from './Header.config';
import * as S from './Header.styles';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <Logo />
      <S.Links>{NavigationLinks.map(({ title }) => title)}</S.Links>

      <S.Social>
        {SocialLinks.map(({ Icon, name }) => (
          <Icon key={name} />
        ))}
      </S.Social>
    </S.HeaderWrapper>
  );
};

export default Header;
