import { compareDesc } from 'date-fns';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdArrowBack } from 'react-icons/io';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Loading from 'components/Loading';
import useLocale from 'translations/hooks';
import { getArticle, getArticles } from 'utilities/getArticles';
import { MetaDataType, parseMetaDataFromArticle } from 'utilities/parseMetaDataFromArticle';

import * as S from './BlogPage.styles';
import { SinglePost } from './components/SinglePost';

export const BlogPage = () => {
  const locale = useLocale();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [listOfArticles, setListOfArticles] = useState<MetaDataType[]>([]);

  useEffect(() => {
    try {
      setIsLoading(true);
      getArticles()
        .map((file) => getArticle(file).then((res) => parseMetaDataFromArticle(res)))
        .forEach((item) =>
          item.then((article) => setListOfArticles((prevState) => [...prevState, article]))
        );
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <Routes>
      <Route path=":postId" element={<SinglePost />} />

      <Route
        index
        element={
          <S.Content>
            <S.TopLineContent>
              <S.BackButton onClick={() => navigate('/')}>
                <IoMdArrowBack /> {t('community.backButton')}
              </S.BackButton>
            </S.TopLineContent>
            {isLoading ? (
              <Loading />
            ) : isError ? (
              <>{t('error')}</>
            ) : (
              listOfArticles
                .sort((article1, article2) => compareDesc(article1.date, article2.date))
                .map((article) => (
                  <S.PostLinkContent
                    onClick={() => navigate(`/blog/${article.path}`)}
                    key={article.path}
                  >
                    <S.PostDate>
                      {article.date.toLocaleDateString(locale.locale, { dateStyle: 'short' })}
                    </S.PostDate>
                    <S.PostLink>{article.title}</S.PostLink>
                  </S.PostLinkContent>
                ))
            )}
          </S.Content>
        }
      />
    </Routes>
  );
};
