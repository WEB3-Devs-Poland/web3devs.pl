import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    transition: 0.3s;
    background-color: ${({ theme }) => theme.background};

    margin-right: 5px;

    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.fontFamily};
  }

  //custom scrollbar
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary};
    border-radius: 2px;
  }
`;

export default GlobalStyle;
