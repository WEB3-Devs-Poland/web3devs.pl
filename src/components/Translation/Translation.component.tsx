import { PropsWithChildren } from 'react';
import { Trans, useTranslation } from 'react-i18next';

type TranslationProps = PropsWithChildren & {
  translationKey: string;
};

export const Translation: React.FC<TranslationProps> = ({ children, translationKey }) => {
  const { t } = useTranslation();

  return (
    <Trans i18nKey={translationKey} t={t}>
      {children}
    </Trans>
  );
};
