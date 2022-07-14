import { PropsWithChildren } from 'react';

import * as S from './Button.styles';

type ButtonTypes = string | 'default';

export type ButtonProps = PropsWithChildren & {
  type?: ButtonTypes;
};

export const Button: React.FC<ButtonProps> = ({ children, type = 'default' }) => {
  return (
    <S.Wrapper>
      <S.Border borderType="left" />
      <S.Text>{children}</S.Text>
      <S.Border borderType="right" />
    </S.Wrapper>
  );
};
