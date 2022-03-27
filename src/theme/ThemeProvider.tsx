import * as SC from 'styled-components';

import darkTheme from './theme.dark';

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const currentTheme = darkTheme;

  return <SC.ThemeProvider theme={currentTheme}>{children}</SC.ThemeProvider>;
};

export default ThemeProvider;
