import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';

import Loading from 'components/Loading';
import { getArticle, getArticles } from 'utilities/getArticles';
import { MetaDataType, parseMetaDataFromArticle } from 'utilities/parseMetaDataFromArticle';

import * as S from './SinglePost.styles';

export const SinglePost: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { postId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [post, setPost] = useState('');
  const [, setMetaData] = useState<MetaDataType>();

  useEffect(() => {
    try {
      setIsLoading(true);
      getArticles().forEach((file) => {
        if (file.includes(postId)) {
          getArticle(file).then((data) => {
            const articleMetaData = parseMetaDataFromArticle(data);
            console.log();
            if (articleMetaData.path === postId) {
              setPost(data[2]);
              setMetaData(articleMetaData);
            }
          });
        }
      });
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [postId]);

  return (
    <S.Content>
      <S.TopLineContent>
        <S.BackButton onClick={() => navigate('/blog')}>
          <IoMdArrowBack /> {t('backButton')}
        </S.BackButton>
      </S.TopLineContent>

      {isLoading ? <Loading /> : isError ? <>{t('error')}</> : <S.SinglePost>{post}</S.SinglePost>}
    </S.Content>
  );
};
