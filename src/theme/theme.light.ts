import { DefaultTheme } from 'styled-components';

import { COLOR, basicTheme } from '../config/theme.config';

const lightTheme: DefaultTheme = {
  primary: COLOR.VIOLET,
  secondary: COLOR.PURPLE,

  text: COLOR.BLACK,
  background: COLOR.WHITE,

  black: COLOR.BLACK,
  white: COLOR.WHITE,

  fontFamily: basicTheme.fontFamily,
  contentWidth: basicTheme.contentWidth,
  maxWidth: basicTheme.maxWidth,
};

export default lightTheme;
