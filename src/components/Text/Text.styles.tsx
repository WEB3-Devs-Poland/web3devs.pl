import styled from 'styled-components';

import { TextType } from './Text.component';
import { getFontSize } from './Text.helpers';

export const Text = styled.div<{ $colored?: boolean; $bold?: boolean; $type: TextType }>`
  display: inline-block;
  font-weight: ${({ $bold, theme }) => $bold && theme.fontWeights.bold};
  font-size: ${({ theme, $type }) => theme.fontSizes[getFontSize($type)]};
  color: ${({ $colored, theme }) => $colored && theme.colors.primary2};

  @media (max-width: ${({ theme }) => theme.config.mobileBreakpoint}) {
    font-size: ${({ theme, $type }) => theme.fontSizes[getFontSize($type, true)]};
  }
`;
