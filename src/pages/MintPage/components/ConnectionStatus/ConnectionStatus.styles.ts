import styled from 'styled-components';

import type { ConnectionStatusProps } from './ConnectionStatus';

type ContainerProps = Pick<ConnectionStatusProps, 'isConnected'>;

export const Container = styled.div<ContainerProps>`
  display: flex;
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.primary};
  align-items: center;
  border-radius: 10px;
  padding: 8px;
  font-size: 0.8rem;
  height: 2.3rem;
  width: fit-content;
  transition-duration: 200ms;
  transition-property: all;
  transition-timing-function: linear;
  will-change: auto;

  &:before {
    content: '';
    background-color: ${({ theme, isConnected }) => (isConnected ? theme.green : theme.red)};
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 100%;
  }
`;

export const Disconnect = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};

  &:hover {
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
  }
`;
