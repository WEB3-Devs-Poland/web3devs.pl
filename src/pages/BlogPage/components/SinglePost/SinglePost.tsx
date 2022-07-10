import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';

import { getArticle, getArticles } from 'utilities/blog';
import { MetaDataType, parseMetaDataFromArticle } from 'utilities/parseMetaDataFromArticle';

import * as S from './SinglePost.styles';

export const SinglePost: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { postId } = useParams();

  const [post, setPost] = useState('');
  const [metaData, setMetaData] = useState<MetaDataType>();

  useEffect(() => {
    const articles = getArticles();

    getArticle(articles[0])
      .then((res) => {
        setMetaData(parseMetaDataFromArticle(res));
        return res;
      })
      .then((res) => setPost(res[2]));
  }, [postId]);

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
