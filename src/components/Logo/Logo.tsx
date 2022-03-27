import lightThemeLogo from 'assets/logo/web3-light-theme.png';

import * as S from './Logo.styles';

const Logo = () => {
  return (
    <S.LogoWrapper>
      <img src={lightThemeLogo} alt="WEB3 Devs Poland Logo" />
    </S.LogoWrapper>
  );
};

export default Logo;
