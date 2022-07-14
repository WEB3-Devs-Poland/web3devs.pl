import styled from 'styled-components';

import { ButtonTypes } from './Button.component';

export const Wrapper = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: row;

  width: max-content;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Text = styled.div<{ type?: ButtonTypes }>`
  transition: ${({ theme }) => theme.transition};
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  display: flex;

  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme, type }) => type === 'primary' && theme.colors.white};

  :hover {
    color: ${({ theme, type }) => type === 'default' && theme.colors.primary2};
  }

  @media (max-width: ${({ theme }) => theme.config.mobileBreakpoint}) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;
