import { DefaultTheme } from 'styled-components';

import { COLOR } from './theme.colors';

const lightTheme: DefaultTheme = {
  primary: COLOR.PURPLE,
  secondary: COLOR.VIOLET,

  text: COLOR.BLACK,
  background: COLOR.WHITE,

  black: COLOR.BLACK,
  white: COLOR.WHITE,

  fontFamily: "'Inter', sans-serif",
  contentWidth: 1250,
};

export default lightTheme;
