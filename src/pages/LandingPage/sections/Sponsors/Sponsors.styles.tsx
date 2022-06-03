import styled from 'styled-components';

import { ThemeType } from 'theme/ThemeProvider';

export const Content = styled.div<{ $currentTheme?: ThemeType }>`
  margin-bottom: 10rem;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);

  z-index: -1;
  transition: 0.3s;
  background-color: ${({ $currentTheme }) => ($currentTheme === 'light' ? '#f0f0f0' : '#1d1d1d')};
`;

export const Wrapper = styled.div`
  margin: auto;
  display: flex;
  align-items: center;

  max-width: ${({ theme }) => theme.contentWidth}px;
  overflow-x: hidden;
`;

export const SponsorIMG = styled.img`
  margin: auto;
  width: 20%;
  padding: 0 2%;
  max-width: 8rem;
`;
