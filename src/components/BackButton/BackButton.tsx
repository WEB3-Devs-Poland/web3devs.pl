import { t } from 'i18next';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div onClick={goBack} className="text-left flex text-xl hover:text-purple-600">
      <div className="mt-auto mb-auto mr-2">
        <IoMdArrowBack />
      </div>
      {t('backButton')}
    </div>
  );
};

export default BackButton;
