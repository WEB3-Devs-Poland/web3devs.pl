type postsListType = {
  postName: string;
  address: string;
  date: Date;
};

export const postsList: postsListType[] = [
  {
    date: new Date('03-05-2022'),
    postName: 'Zakładanie portfela MetaMask',
    address:
      'https://raw.githubusercontent.com/WEB3-Devs-Poland/baza-wiedzy/main/zakladanie-portfela-metamask.md',
  },
];
