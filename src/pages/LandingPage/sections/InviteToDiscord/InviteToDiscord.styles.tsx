import styled from 'styled-components';

export const Content = styled.div`
  margin: calc(${({ theme }) => theme.config.hederHeight} + 136px) auto 0;

  height: 400px;
  max-width: 700px;
  justify-content: space-around;

  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.config.mobileBreakpoint}) {
    height: 300px;
  }
`;
