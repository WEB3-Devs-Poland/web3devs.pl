import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  max-width: ${({ theme }) => theme.config.maxContentWidth};
  margin: auto;

  @media (max-width: ${({ theme }) => theme.config.mobileBreakpoint}) {
    padding: 0 10px;
  }
`;
