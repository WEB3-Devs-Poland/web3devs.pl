import React from 'react';
import { useWaitForTransaction } from 'wagmi';

import * as S from './TransactionStatus.styles';

interface TransactionStatusProps {
  transaction: string;
}

export const TransactionStatus = React.memo(({ transaction }: TransactionStatusProps) => {
  const { status } = useWaitForTransaction({
    hash: transaction,
  });
  return (
    <S.Container>
      Transaction {transaction}: <S.Status status={status}>{status}</S.Status>
    </S.Container>
  );
});
