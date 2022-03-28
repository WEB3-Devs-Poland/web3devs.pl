import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  TranslationsContext,
  TranslationsContextType,
} from 'translations/TranslationsProvider/TranslationsProvider';
import { LOCALE } from 'translations/translations.model';

const useLocale = () => {
  const { i18n } = useTranslation();
  const { locale, setLocale } = useContext(TranslationsContext) as TranslationsContextType;
  const [initialLanguage, initialRegion] = locale.split('-');
  const [language, setLanguage] = useState(initialLanguage);
  const [region, setRegion] = useState(initialRegion);

  const changeLocale = (selectedLocale: LOCALE) => {
    const [selectedLanguage, selectedRegion] = selectedLocale.split('-');

    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('locale', selectedLocale);

    setLocale(selectedLocale);
    setLanguage(selectedLanguage);
    setRegion(selectedRegion);
  };

  return {
    locale,
    region,
    language,
    changeLocale,
  };
};

export default useLocale;
