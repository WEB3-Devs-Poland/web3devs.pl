import { PropsWithChildren } from 'react';
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './GlobalStyle';
import { colors } from './theme.colors';
import { config } from './theme.config';
import { fontSizes } from './theme.fontSizes';
import { fontWeights } from './theme.fontWeights';

const defaultTheme: DefaultTheme = {
  colors,
  config,
  fontSizes,
  fontWeights,
  fontFamily: "'Inter', sans-serif",
  transition: '300ms',
};

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledThemeProvider theme={defaultTheme}>
      {children}
      <GlobalStyle />
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
