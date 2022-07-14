import { PropsWithChildren } from 'react';

import * as S from './Button.styles';
import * as Default from './Button.styles.default';
import * as Link from './Button.styles.link';
import * as Primary from './Button.styles.primary';

export type ButtonTypes = 'default' | 'primary' | 'link';

export type ButtonProps = PropsWithChildren & {
  type?: ButtonTypes;
};

export const Button: React.FC<ButtonProps> = ({ children, type = 'default' }) => {
  return (
    <S.Wrapper>
      {type === 'default' && (
        <>
          <Default.Border borderType="left" />
          <S.Text>{children}</S.Text>
          <Default.Border borderType="right" />
        </>
      )}
      {type === 'primary' && (
        <Primary.Button>
          <S.Text type="primary">{children}</S.Text>
        </Primary.Button>
      )}
      {type === 'link' && (
        <Link.Button>
          <S.Text>{children}</S.Text>
        </Link.Button>
      )}
    </S.Wrapper>
  );
};
