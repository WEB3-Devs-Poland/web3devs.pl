import { useState } from 'react';
import { useDisconnect } from 'wagmi';

import { hashEllipsis } from 'utilities/hashEllipsis';

import * as S from './ConnectionStatus.styles';
import { useTranslation } from 'react-i18next';

export interface ConnectionStatusProps {
  address?: string;
  className?: string;
  isConnected: boolean;
}

const ConnectionStatus = ({ address, className, isConnected }: ConnectionStatusProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { disconnect } = useDisconnect();
  const { t } = useTranslation();

  return (
    <S.Container
      className={className}
      title={address}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      isConnected={isConnected}
    >
      {isConnected && address && (
        <>
          {!isExpanded && hashEllipsis(address)}
          {isExpanded && (
            <>
              {address}
              <S.Disconnect onClick={() => disconnect()} type="button">
                {t('wallet.disconnect')}
              </S.Disconnect>
            </>
          )}
        </>
      )}
      {!isConnected && (
        <span> {t('wallet.notConnected')}</span>
      )}
    </S.Container>
  );
};

export default ConnectionStatus;
