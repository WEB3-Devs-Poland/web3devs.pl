import { fontSizes } from 'theme/theme.fontSizes';

import { TextType } from './Text.component';

export const getFontSize = (textType: TextType, isMobile?: boolean) => {
  const fontSize: Record<TextType, keyof typeof fontSizes> = {
    title: isMobile ? 'xxl' : 'title',
    subtitle: isMobile ? 'l' : 'xl',
    text: isMobile ? 'm' : 'l',
  };

  return fontSize[textType];
};
