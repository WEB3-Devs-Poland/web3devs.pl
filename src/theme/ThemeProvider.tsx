import * as SC from 'styled-components';

import GlobalStyle from './GlobalStyle';
import lightTheme from './theme.light';

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const currentTheme = lightTheme;

  return (
    <SC.ThemeProvider theme={currentTheme}>
      {children}
      <GlobalStyle />
    </SC.ThemeProvider>
  );
};

export default ThemeProvider;
