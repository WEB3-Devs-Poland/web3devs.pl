import i18n from 'i18next';
import { createContext, useEffect, useState } from 'react';
import { initReactI18next } from 'react-i18next';

import { LOCALE } from 'translations/translations.model';

import translationResources from '../translations.resources.json';

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  resources: translationResources,
  lng: 'en'
});

export type TranslationsContextType = {
  locale: LOCALE;
  setLocale: React.Dispatch<React.SetStateAction<LOCALE>>;
};

export const TranslationsContext = createContext<TranslationsContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const TranslationsProvider = ({ children }: Props) => {
  const [locale, setLocale] = useState<LOCALE>(
    (localStorage.getItem('locale') as LOCALE) || LOCALE.EN
  );

  useEffect(() => {
    i18n.changeLanguage(locale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TranslationsContext.Provider value={{ locale, setLocale }}>
      {children}
    </TranslationsContext.Provider>
  );
};

export default TranslationsProvider;
