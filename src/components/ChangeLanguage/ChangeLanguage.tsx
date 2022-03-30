import useLocale from 'translations/hooks';
import { LOCALE } from 'translations/translations.model';

import * as S from './ChangeLanguage.styles';

const ChangeLanguage = () => {
  const { region, changeLocale } = useLocale();

  const changeLanguage = () => {
    region === 'PL' && changeLocale(LOCALE.EN);
    region === 'EN' && changeLocale(LOCALE.PL);
  };

  return <S.LanguageSwitch onClick={changeLanguage}>{region}</S.LanguageSwitch>;
};

export default ChangeLanguage;
