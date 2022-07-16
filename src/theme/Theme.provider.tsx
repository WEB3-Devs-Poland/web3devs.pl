import { PropsWithChildren, createContext, useState } from 'react';
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './GlobalStyle';
import { colors as dark } from './theme.colors.dark';
import { colors as light } from './theme.colors.light';
import { config } from './theme.config';
import { fontSizes } from './theme.fontSizes';
import { fontWeights } from './theme.fontWeights';

const defaultTheme = (isDarkTheme: boolean): DefaultTheme => {
  return {
    colors: isDarkTheme ? dark : light,
    config,
    fontSizes,
    fontWeights,
    fontFamily: "'Inter', sans-serif",
    transition: '300ms',
  };
};

export type ThemeStateContextType = { isDarkTheme: boolean; changeTheme: () => void };

export const ThemeStateContext = createContext<ThemeStateContextType | null>(null);

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => setIsDarkTheme((prevState) => !prevState);

  return (
    <ThemeStateContext.Provider value={{ isDarkTheme, changeTheme }}>
      <StyledThemeProvider theme={defaultTheme(isDarkTheme)}>
        {children}
        <GlobalStyle />
      </StyledThemeProvider>
    </ThemeStateContext.Provider>
  );
};

export default ThemeProvider;
