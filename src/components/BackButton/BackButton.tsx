import { t } from 'i18next';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export type BackButtonProps = {
  replace?: boolean;
  target: string;
};

const BackButton: React.FC<BackButtonProps> = ({ replace = false, target }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(target, { replace })}
      className="text-left flex text-xl hover:text-purple-600 cursor-pointer"
    >
      <div className="mt-auto mb-auto mr-2">
        <IoMdArrowBack />
      </div>
      {t('backButton')}
    </div>
  );
};

export default BackButton;
