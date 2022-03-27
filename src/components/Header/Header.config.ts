import { IconType } from 'react-icons';
import { SiDiscord, SiGithub } from 'react-icons/si';

type NavigationLinksModel = {
  title: string;
  link: string;
};

export const NavigationLinks: NavigationLinksModel[] = [
  {
    title: 'Hello',
    link: '',
  },
];

type SocialLinksModel = {
  name: string;
  Icon: IconType;
  link: string;
};

export const SocialLinks: SocialLinksModel[] = [
  {
    name: 'Discord',
    Icon: SiDiscord,
    link: 'https://discord.gg/4JE6qHd5',
  },
  {
    name: 'GitHub',
    Icon: SiGithub,
    link: 'https://github.com/WEB3-Devs-Poland',
  },
  // {
  //   name: 'Twitter',
  //   Icon: SiTwitter,
  //   link: 'https://twitter.com/home',
  // },
];
