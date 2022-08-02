import styled from 'styled-components';

import { ThemeStateContextType } from 'theme/ThemeProvider';

interface ButtonProps {
  currentTheme: ThemeStateContextType['currentTheme'];
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  display: flex;
  gap: 8px;
  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme }) => theme.secondary};
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: bold;
  color: ${({ currentTheme, theme }) => (currentTheme === 'light' ? theme.black : theme.white)};
  background-color: transparent;
  align-items: center;
  justify-content: center;
  width: fit-content;

  :active,
  :hover {
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.white};
  }
`;

interface MetaMaskIconProps {
  isConnected?: boolean;
}

export const MetaMaskIcon = styled.img<MetaMaskIconProps>`
  padding: 4px;
  width: 20px;
  height: 20px;
  border: ${({ theme, isConnected }) => `2px solid ${isConnected ? theme.green : theme.red}`};
  border-radius: 50%;
`;
