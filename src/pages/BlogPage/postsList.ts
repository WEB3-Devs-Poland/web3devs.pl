//to add new post, add title to this type and then add new object to postsList
export type postTitleType = 'zakladanie-portfela-metamask';

export const postsList: Record<
  postTitleType,
  {
    postName: string;
    address: string;
    date: Date;
  }
> = {
  'zakladanie-portfela-metamask': {
    date: new Date('03-05-2022'),
    postName: 'Zakładanie portfela MetaMask',
    address:
      'https://raw.githubusercontent.com/WEB3-Devs-Poland/baza-wiedzy/main/zakladanie-portfela-metamask.md',
  },
};
