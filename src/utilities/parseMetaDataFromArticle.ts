export type MetaDataType = { [key: string]: any };

export const parseMetaDataFromArticle = (data: string[]): MetaDataType => {
  const metaData: MetaDataType = {};

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

  return metaData;
};
