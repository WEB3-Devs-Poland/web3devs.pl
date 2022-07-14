import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: ${({ theme }) => theme.config.defaultFontSize};
  }

  body {
    margin: 0;
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: ${({ theme }) => theme.colors.white};
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
