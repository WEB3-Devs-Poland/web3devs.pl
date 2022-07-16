import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${({ theme }) => theme.config.defaultFontSize};
  }

  body {
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fontFamily};
    transition: ${({ theme }) => theme.transition};
    background-color: ${({ theme }) => theme.colors.background};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
