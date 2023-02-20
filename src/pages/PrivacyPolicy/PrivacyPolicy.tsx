import useLocale from 'translations/hooks';
import { LOCALE } from 'translations/translations.model';

import { PrivacyPolicyEN } from './PrivacyPolicy.en';
import { PrivacyPolicyPL } from './PrivacyPolicy.pl';

export const PrivacyPolicy = () => {
  const { locale } = useLocale();

  if (locale === LOCALE.PL) {
    return <PrivacyPolicyPL />;
  }

  return <PrivacyPolicyEN />;
};
