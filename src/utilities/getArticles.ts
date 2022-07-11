export const getArticle = (path: string) => {
  console.log(document.URL.split('/blog')[0] + path.replace('./static', '/static'));
  return fetch(path)
    .then((res) => res.text())
    .then((res) => res.split('---'));
};

export const getArticles = () => {
  const files = require.context('blog/articles/', true, /(blog\/articles\/)+(.+\.md)$/);
  const listOfFiles = files.keys().map((article) => files(article));

  return listOfFiles;
};
