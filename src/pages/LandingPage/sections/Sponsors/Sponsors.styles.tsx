import styled from 'styled-components';

import { ThemeType } from 'theme/ThemeProvider';

export const Content = styled.div<{ $currentTheme?: ThemeType }>`
  margin-bottom: 10rem;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);

  transition: 0.5s;
  background-color: ${({ $currentTheme }) => ($currentTheme === 'light' ? '#f0f0f0' : '#0a0a0a')};
`;

export const Wrapper = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;

  max-width: ${({ theme }) => theme.contentWidth}px;
  overflow-x: hidden;
`;

export const SponsorIMG = styled.img`
  margin: auto;
  width: 10rem;
  padding: 0 2.5rem;

  @media (max-width: ${({ theme }) => theme.maxWidth}px) {
    width: 7.5rem;
    padding: 0 1rem;
  }
`;
