/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import BackButton from '../../../../components/BackButton/BackButton';
import { MetaDataType, parseMetaDataFromArticle } from '../../../../utilities/parseMetaDataFromArticle';

import { getArticle, getArticles } from '../../../../utilities/getArticles';
import Loading from '../../../../components/Loading';
import * as S from './SinglePost.styles';

export const SinglePost: React.FC = () => {
  const { t } = useTranslation();
  const { postId } = useParams();

  const [ isLoading, setIsLoading ] = useState(false);
  const [ isError, setIsError ] = useState(false);

  const [ post, setPost ] = useState('');
  const [ , setMetaData ] = useState<MetaDataType>();

  useEffect(() => {
    setIsLoading(true);
    getArticles().forEach((file) => {
      console.log({ file });
      if (file.includes(postId)) {
        getArticle(file)
          .then((data) => {
            console.log(data);
            const articleMetaData = parseMetaDataFromArticle(data);

            if (articleMetaData.path === postId) {
              setPost(data[2]);
              setMetaData(articleMetaData);
              setIsLoading(false);
            }
          })
          .catch(() => {
            setIsError(true);
          });
      }
    });
  }, [ postId ]);

  return (
    <S.Content>
      <div className="my-8">
        <BackButton target="/blog" />
      </div>

      {isLoading ? <Loading /> : isError ? <>{t('error')}</>
        : (
          <S.SinglePost>
            {post}
          </S.SinglePost>
        )}
    </S.Content>
  );
};
