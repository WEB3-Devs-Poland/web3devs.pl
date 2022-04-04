import { DefaultTheme } from 'styled-components';

import { COLOR, basicTheme } from '../config/theme.config';

const lightTheme: DefaultTheme = {
  primary: COLOR.VIOLET,
  secondary: COLOR.PURPLE,
  grey: {
    first: COLOR.UNIFORM_GREY,
  },

  text: COLOR.BLACK,
  background: COLOR.WHITE,

  black: COLOR.BLACK,
  white: COLOR.WHITE,

  hederHeight: basicTheme.hederHeight,
  fontFamily: basicTheme.fontFamily,
  contentWidth: basicTheme.contentWidth,
  maxWidth: basicTheme.maxWidth,
};

export default lightTheme;
