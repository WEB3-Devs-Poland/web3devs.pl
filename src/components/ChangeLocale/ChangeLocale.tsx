import useLocale from 'translations/hooks';
import { LOCALE } from 'translations/translations.model';

import * as S from './ChangeLocale.styles';

const ChangeLocale = () => {
  const { region, changeLocale } = useLocale();

  const changeLanguage = () => {
    region === 'PL' && changeLocale(LOCALE.EN);
    region === 'EN' && changeLocale(LOCALE.PL);
  };

  return <S.Region onClick={changeLanguage}>{region}</S.Region>;
};

export default ChangeLocale;
