import { useContext } from 'react';

import { ThemeStateContext, ThemeStateContextType } from 'theme/ThemeProvider';

import * as S from './Sponsors.styles';
import { sponsors } from './sponsors.config';

const Sponsors = () => {
  const { currentTheme } = useContext(ThemeStateContext) as ThemeStateContextType;

  return (
    <S.Content $currentTheme={currentTheme}>
      <S.Wrapper>
        {sponsors.map(({ logo, name }) => (
          <S.SponsorIMG key={name} src={logo[currentTheme]} alt={name} />
        ))}
      </S.Wrapper>
    </S.Content>
  );
};

export default Sponsors;
