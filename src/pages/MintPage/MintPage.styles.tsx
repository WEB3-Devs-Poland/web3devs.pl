import styled from 'styled-components';

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

  :active {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
`;
