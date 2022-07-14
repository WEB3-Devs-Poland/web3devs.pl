import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
    margin: 0;

    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: ${({ theme }) => theme.colors.white};
  }

  //custom scrollbar
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary2};
    border-radius: 1px;
  }
`;

export default GlobalStyle;
