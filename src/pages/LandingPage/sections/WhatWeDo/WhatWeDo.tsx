import { useTranslation } from 'react-i18next';

import * as S from './WhatWeDo.styles';
import { WhatWeDoCards } from './whatWeDo.config';

const WhatWeDo = () => {
  const { t } = useTranslation();

  return (
    <S.Content>
      <S.Title>{t('whatWeDo.title')}</S.Title>
      <S.Cards>
        {WhatWeDoCards().map(({ title, SVGComponent }) => (
          <S.Card key={title}>
            <SVGComponent />
            <S.CardTitle>{title}</S.CardTitle>
          </S.Card>
        ))}
      </S.Cards>
    </S.Content>
  );
};

export default WhatWeDo;
