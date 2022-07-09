import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  gap: 8px;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primary};
  align-items: center;
  justify-content: center;
  width: fit-content;

  :active,
  :hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export const MetaMaskIcon = styled.img`
  width: 20px;
  height: 20px;
`;
