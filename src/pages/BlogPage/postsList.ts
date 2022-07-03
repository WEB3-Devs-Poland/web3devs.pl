type postsListType = {
  postName: string;
  author: string;
  fileName: string;
  date: Date;
};

export const postsList: postsListType[] = [
  {
    postName: 'Zakładanie portfela MetaMask',
    author: 'https://github.com/mateuszhaponiuk',
    fileName: 'zakladanie-portfela-metamask',
    date: new Date('03-05-2022'),
  },
];
