import i18 from 'i18next';
import { useEffect, useState } from 'react';

import * as S from './ChangeLanguage.styles';

export const ChangeLanguage: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState('');

  const changeLanguage = () => {
    if (currentLanguage === 'pl') {
      i18.changeLanguage('en');
      setCurrentLanguage('en');
    }

    if (currentLanguage === 'en') {
      i18.changeLanguage('pl');
      setCurrentLanguage('pl');
    }
  };

  useEffect(() => {
    setCurrentLanguage(i18.language.split('-')[0]);
  }, []);

  return <S.CurrentLanguage onClick={changeLanguage}>{currentLanguage.toLocaleUpperCase()}</S.CurrentLanguage>;
};
