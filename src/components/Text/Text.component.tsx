import { PropsWithChildren } from 'react';

import * as S from './Text.styles';

export type TextType = 'title' | 'subtitle' | 'text';

type TextProps = PropsWithChildren & {
  bold?: boolean;
  colored?: boolean;
  type?: TextType;
};

export const Text: React.FC<TextProps> = ({ children, colored, bold, type = 'text' }) => {
  return (
    <S.Text $bold={bold} $colored={colored} $type={type}>
      {children}
    </S.Text>
  );
};
