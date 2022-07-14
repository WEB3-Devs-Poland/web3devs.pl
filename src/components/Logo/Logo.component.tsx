import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

import LogoDark from 'assets/logo/dark.png';

import * as S from './Logo.styles';

export type LogoProps = PropsWithChildren & {};

export const Logo: React.FC<LogoProps> = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Logo src={LogoDark} onClick={() => navigate('/')} />
    </S.Wrapper>
  );
};
