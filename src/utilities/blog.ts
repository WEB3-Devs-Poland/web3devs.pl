export const getArticles = (): string[] => {
  const articles = require.context('blog/articles/', true, /(blog\/articles\/)+(.+\.md)$/);
  return articles.keys().map((article) => articles(article));
};

export const getArticle = (path: string) => {
  return fetch(path)
    .then((res) => res.text())
    .then((res) => res.split('---'));
};
