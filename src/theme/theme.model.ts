import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;

    text: string;
    background: string;

    black: string;
    white: string;

    fontFamily: string;
    contentWidth: number;
    maxWidth: number;
  }
}
