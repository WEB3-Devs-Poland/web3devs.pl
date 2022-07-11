export type MetaDataType = {
  title: string;
  author: string;
  path: string;
  date: Date;
  category: string;
  tags: string[];
  summary: string;
};

export const parseMetaDataFromArticle = (data: string[]) => {
  const metaData: { [key: string]: any } = {};

  data[1].split('\n').forEach((item) => {
    if (item.length > 0) {
      const details = item.split(': ');
      if (details[0] === 'tags') {
        metaData[details[0]] = JSON.parse(details[1].replaceAll(/'/g, '"'));
      } else if (details[0] === 'date') {
        metaData[details[0]] = new Date(details[1]);
      } else {
        metaData[details[0]] = details[1].replaceAll(/'/g, '');
      }
    }
  });

  return metaData as MetaDataType;
};
