import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import darkThemeLogo from 'assets/logo/web3-dark-theme.png';
import lightThemeLogo from 'assets/logo/web3-light-theme.png';

import WalletConnectBtn from 'components/WalletConnectBtn';
import { ThemeStateContext, ThemeStateContextType } from 'theme/ThemeProvider';

import * as S from './Header.styles';

const Header = () => {
  const navigate = useNavigate();
  const { currentTheme } = useContext(ThemeStateContext) as ThemeStateContextType;

  return (
    <S.Header>
      <S.Logo
        src={currentTheme === 'light' ? lightThemeLogo : darkThemeLogo}
        alt="WEB3 Devs Poland"
        onClick={() => navigate('/')}
      />

      <S.Menu>
        <WalletConnectBtn />
      </S.Menu>
    </S.Header>
  );
};

export default Header;
