/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import { compareDesc, isFuture } from 'date-fns';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import BackButton from '../../components/BackButton/BackButton';
import useLocale from '../../translations/hooks';
import { getArticle, getArticles } from '../../utilities/getArticles';
import { MetaDataType, parseMetaDataFromArticle } from '../../utilities/parseMetaDataFromArticle';
import { swiatWeb3BlogPosts } from './BlogPage.constants';

export const BlogPage = () => {
  const navigate = useNavigate();
  const locale = useLocale();

  const [listOfArticles, setListOfArticles] = useState<MetaDataType[]>(swiatWeb3BlogPosts);

  useEffect(() => {
    getArticles()
      .map((file) => getArticle(file).then((res) => parseMetaDataFromArticle(res)))
      .forEach((item) =>
        item.then((article) => setListOfArticles((prevState) => [...prevState, article]))
      );
  }, []);

  return (
    <Routes>
      <Route
        index
        element={
          <>
            <div className="my-8">
              <BackButton target="/" />
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-1 gap-8 text-left">
              {listOfArticles
                .filter((article) => !isFuture(new Date(article.date)))
                .sort((article1, article2) =>
                  compareDesc(new Date(article1.date), new Date(article2.date))
                )
                .map((article) => (
                  <div
                    className="flex flex-col p-4 cursor-pointer shadow-sm shadow-gray-300 hover:bg-gray-50"
                    onClick={() =>
                      article.path.includes('https://')
                        ? window.open(article.path, '_blank')
                        : navigate(`/blog/${article.path}`)
                    }
                    key={article.path}
                  >
                    <div className="mb-4 h-40 w-fit flex flex-col justify-center mx-auto">
                      <img src={article.image} alt="post" className="max-h-40 w-fit mx-auto" />
                    </div>

                    <div className="flex flex-col">
                      <a
                        className="text-md text-purple-600 font-semibold"
                        target="_blank"
                        rel="noreferrer"
                        href={article.authorLink}
                      >
                        {article.author}
                      </a>
                      <span className="text-sm text-gray-400 mb-1">
                        {new Date(article.date).toLocaleDateString(locale.locale, {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <h2 className="font-bold text-xl">{article.title}</h2>
                    </div>

                    <div className="text-sm text-gray-500 mt-4 mb-4">{article.summary}</div>

                    <span
                      onClick={() =>
                        article.path.includes('https://')
                          ? window.open(article.path, '_blank')
                          : navigate(`/blog/${article.path}`)
                      }
                      className="cursor-pointer text-purple-600 font-bold mt-auto"
                    >
                      Read {'->'}
                    </span>
                  </div>
                ))}
            </div>
          </>
        }
      />
    </Routes>
  );
};
