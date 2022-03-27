import Logo from 'components/Logo';

import * as S from './Header.styles';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <Logo />
      <S.Links></S.Links>
      <S.Social></S.Social>
    </S.HeaderWrapper>
  );
};

export default Header;
