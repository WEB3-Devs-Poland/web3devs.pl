import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.background};

    font-family: ${({ theme }) => theme.fontFamily};
  }
`;

export default GlobalStyle;
