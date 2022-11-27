import styled from 'styled-components';

import { ThemeType } from 'theme/ThemeProvider';

export const Content = styled.div<{ $currentTheme?: ThemeType }>`
  margin-bottom: 10rem;
  padding: 20px 0;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);

  transition: 0.3s;
  background-color: ${({ $currentTheme }) => ($currentTheme === 'light' ? '#f0f0f0' : '#1d1d1d')};
`;

export const SubTitle = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  padding-top: 1rem;
  margin: auto;

  max-width: 600px;
  font-weight: 800;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.maxWidth}px) {
    font-size: 1rem;
    max-width: 80%;
  }
`;

export const Wrapper = styled.div`
  margin: auto;
  display: flex;
  align-items: center;

  flex-wrap: wrap;

  max-width: ${({ theme }) => theme.contentWidth}px;
  overflow-x: hidden;
  padding: 20px 0;
`;

export const ImgWrapper = styled.div`
  margin: auto;
  padding: 25px 50px;
`;

export const SponsorIMG = styled.img`
  cursor: pointer;
  max-width: 10rem;
`;
