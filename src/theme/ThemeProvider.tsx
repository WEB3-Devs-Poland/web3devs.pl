import * as SC from 'styled-components';

import GlobalStyle from './GlobalStyle';
import darkTheme from './theme.dark';

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const currentTheme = darkTheme;

  return (
    <SC.ThemeProvider theme={currentTheme}>
      {children}
      <GlobalStyle />
    </SC.ThemeProvider>
  );
};

export default ThemeProvider;
