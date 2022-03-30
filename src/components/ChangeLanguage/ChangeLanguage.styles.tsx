import styled from 'styled-components';

export const LanguageSwitch = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  font-size: 1.25rem;

  :hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: ${({ theme }) => theme.maxWidth}px) {
    font-size: 1.5rem;
  }
`;
