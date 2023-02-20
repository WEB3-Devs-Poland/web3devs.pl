import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import * as S from './Footer.styles';

const Footer = () => {
  const { t } = useTranslation();

  return <S.Footer>{t('footer')}</S.Footer>;
};

export default Footer;
