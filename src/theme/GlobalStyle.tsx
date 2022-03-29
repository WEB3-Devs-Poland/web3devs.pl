import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    transition: 0.5s;
    background-color: ${({ theme }) => theme.background};

    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.fontFamily};
  }
`;

export default GlobalStyle;
