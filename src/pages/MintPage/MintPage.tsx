import { useAccount, useConnect } from 'wagmi';

import * as S from './MintPage.styles';

const MintPage = () => {
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
  const { address, connector: activeConnector, isConnected } = useAccount();

  console.log(address);
  return (
    <S.Content>
      {!isConnected &&
        connectors.map((connector) => (
          <S.Button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            {isLoading && pendingConnector?.id === connector.id
              ? 'Connecting...'
              : `Connect to MetaMask`}
          </S.Button>
        ))}
      {isConnected && (
        <span>
          Connected: {activeConnector?.name}: {address}
        </span>
      )}
    </S.Content>
  );
};

export default MintPage;
