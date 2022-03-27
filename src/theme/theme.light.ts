import { DefaultTheme } from 'styled-components';

import { COLOR, basicTheme } from '../config/theme.config';

const lightTheme: DefaultTheme = {
  primary: COLOR.PURPLE,
  secondary: COLOR.VIOLET,

  text: COLOR.BLACK,
  background: COLOR.WHITE,

  black: COLOR.BLACK,
  white: COLOR.WHITE,

  fontFamily: basicTheme.fontFamily,
  contentWidth: basicTheme.contentWidth,
};

export default lightTheme;
