export const getArticle = (path: string) => {
  return fetch(path.replace('/blog', ''))
    .then((res) => res.text())
    .then((res) => res.split('---'));
};

export const getArticles = () => {
  const files = require.context('blog/articles/', true, /(blog\/articles\/)+(.+\.md)$/);
  const listOfFiles = files.keys().map((article) => files(article));

  return listOfFiles;
};
