import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    green: string;
    red: string;
    grey: {
      first: string;
    };

    text: string;
    background: string;

    black: string;
    white: string;

    hederHeight: number;
    fontFamily: string;
    contentWidth: number;
    maxWidth: number;
  }
}
