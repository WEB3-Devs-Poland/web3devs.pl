import { DefaultTheme } from 'styled-components';

import { COLOR, basicTheme } from '../config/theme.config';

const darkTheme: DefaultTheme = {
  primary: COLOR.PURPLE,
  secondary: COLOR.VIOLET,

  text: COLOR.WHITE,
  background: COLOR.BLACK,

  black: COLOR.BLACK,
  white: COLOR.WHITE,

  fontFamily: basicTheme.fontFamily,
  contentWidth: basicTheme.contentWidth,
};

export default darkTheme;
