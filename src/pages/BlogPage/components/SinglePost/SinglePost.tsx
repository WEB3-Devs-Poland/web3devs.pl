import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';

import * as S from './SinglePost.styles';

export const SinglePost: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { fileName } = useParams();

  const [post, setPost] = useState('');

  useEffect(() => {
    import(`./posts/${fileName}.md`).then((res) => {
      fetch(res.default)
        .then((res) => res.text())
        .then((res) => setPost(res));
    });
  }, [fileName]);

  return (
    <S.Content>
      <S.TopLineContent>
        <S.BackButton onClick={() => navigate('/blog')}>
          <IoMdArrowBack /> {t('backButton')}
        </S.BackButton>
      </S.TopLineContent>

      <S.SinglePost>{post}</S.SinglePost>
    </S.Content>
  );
};
