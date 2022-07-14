import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;

  height: ${({ theme }) => theme.config.hederHeight};
  max-width: ${({ theme }) => theme.config.maxContentWidth};
`;
