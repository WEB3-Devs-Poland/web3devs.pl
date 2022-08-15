import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeStateContext, ThemeStateContextType } from 'theme/ThemeProvider';

import * as S from './Partners.styles';
import { partners } from './partners.config';

const Partners = () => {
  const { t } = useTranslation();
  const { currentTheme } = useContext(ThemeStateContext) as ThemeStateContextType;

  return (
    <S.Content $currentTheme={currentTheme}>
      <S.SubTitle>{t('partners.title')}</S.SubTitle>
      <S.Wrapper>
        {partners.map(({ logo, name, link }) => (
          <S.ImgWrapper key={name}>
            <S.SponsorIMG
              alt={name}
              src={logo[currentTheme]}
              onClick={() => window.open(link, '_blank')}
            />
          </S.ImgWrapper>
        ))}
      </S.Wrapper>
    </S.Content>
  );
};

export default Partners;
