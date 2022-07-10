import styled from 'styled-components';
import ConnectionStatus from './components/ConnectionStatus';

export const Button = styled.button`
  cursor: pointer;
  padding: 1rem 2.5rem;

  border: none;
  border-radius: 10px;

  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primary};
  align-self: center;

  :active, :hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  width: 100%;
  min-height: 100%;

  & > * {
    box-sizing: border-box;
  }
`;

export const StyledConnectionStatus = styled(ConnectionStatus)`
  align-self: flex-start;
`;
