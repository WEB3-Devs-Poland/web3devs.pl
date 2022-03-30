import styled from 'styled-components';

export const ThemeSwitch = styled.div`
  display: flex;
  align-items: center;

  svg {
    height: 100%;
    font-size: 1.5rem;

    @media (max-width: ${({ theme }) => theme.maxWidth}px) {
      font-size: 2rem;
    }
  }
`;
