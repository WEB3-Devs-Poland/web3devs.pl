import { useAccount, useConnect } from 'wagmi';
import metaMaskIcon from 'assets/icons/metamask.png';

import * as S from './WalletConnectBtn.styles';
import { hashEllipsis } from 'utilities/hashEllipsis';
import { useTranslation } from 'react-i18next';

const WalletConnectBtn = () => {
  const { t } = useTranslation();
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
  const { address, isConnected } = useAccount();

  return (
    <>
      {!isConnected &&
        connectors.map((connector) => (
          <S.Button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            <S.MetaMaskIcon src={metaMaskIcon} alt="MetaMask Logo" />
            {isLoading && pendingConnector?.id === connector.id
              ? t('wallet.connecting')
              : !error && t('wallet.connect')}
            {isConnected && address && hashEllipsis(address)}
            {error && t('wallet.connectionIssues')}
          </S.Button>
        ))}
    </>
  );
};

export default WalletConnectBtn;
