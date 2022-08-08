import { t } from "i18next";
import { IoMdArrowBack } from "react-icons/io";

type BackButtonProps = {
  target?: string
}

const BackButton = ({target = '/'}: BackButtonProps) => {
  return (
    <a href={target} className="text-left flex text-xl hover:text-purple-600">
      <div className="mt-auto mb-auto mr-2">
        <IoMdArrowBack /> 
      </div>
      {t('backButton')}
  </a>
  )
};

export default BackButton;
