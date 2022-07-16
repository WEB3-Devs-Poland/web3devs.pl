import 'styled-components';

import { colors } from './theme.colors.light';
import { config } from './theme.config';
import { fontSizes } from './theme.fontSizes';
import { fontWeights } from './theme.fontWeights';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    config: typeof config;
    fontSizes: typeof fontSizes;
    fontWeights: typeof fontWeights;
    fontFamily: string;
    transition: string;
  }
}
