import { createContext, useState } from 'react';
import * as SC from 'styled-components';

import GlobalStyle from './GlobalStyle';
import darkTheme from './theme.dark';
import lightTheme from './theme.light';

type ThemeType = 'light' | 'dark';

export type ThemeStateContextType = {
  currentTheme: ThemeType;
  changeTheme: () => void;
};

export const ThemeStateContext = createContext<ThemeStateContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('light');

  const changeTheme = () => {
    const theme: ThemeType = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(theme);
  };

  return (
    <ThemeStateContext.Provider value={{ currentTheme, changeTheme }}>
      <SC.ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
        {children}
        <GlobalStyle />
      </SC.ThemeProvider>
    </ThemeStateContext.Provider>
  );
};

export default ThemeProvider;
