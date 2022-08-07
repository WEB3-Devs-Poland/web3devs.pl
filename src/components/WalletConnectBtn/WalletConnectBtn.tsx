import { useTranslation } from 'react-i18next';
import { Connector, useAccount, useConnect, useDisconnect } from 'wagmi';

import metaMaskIcon from 'assets/icons/metamask.png';
import { hashEllipsis } from 'utilities/hashEllipsis';

import * as S from './WalletConnectBtn.styles';
import { useContext, useState } from 'react';
import { ThemeStateContext, ThemeStateContextType } from 'theme/ThemeProvider';

const WalletConnectBtn = () => {
  const { t } = useTranslation();
  const { currentTheme } = useContext(ThemeStateContext) as ThemeStateContextType;
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const handleConnection = (connector: Connector) => {
    isConnected ? disconnect() : connect({ connector });
  };
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {connectors.map((connector) => (
        <S.Button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => handleConnection(connector)}
          onMouseEnter={() => {
            setHovered(true)
          }}
          onMouseLeave={() => {
            setHovered(false)
          }}
          title={address}
          currentTheme={currentTheme}
        >
          <S.MetaMaskIcon src={metaMaskIcon} alt="MetaMask Logo" isConnected={isConnected} />
          {isLoading && pendingConnector?.id === connector.id
            ? t('wallet.connecting')
            : !error && !isConnected && t('wallet.connect')}
          {isConnected && address && !hovered && hashEllipsis(address)}
          {isConnected && address && hovered && t('wallet.disconnect')}
          {error && t('wallet.connectionIssues')}
        </S.Button>
      ))}
    </>
  );
};

export default WalletConnectBtn;
