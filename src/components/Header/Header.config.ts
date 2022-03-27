import { IconType } from 'react-icons';
import { SiDiscord, SiGithub } from 'react-icons/si';

type NavigationLinksModel = {
  title: string;
  link: string;
};

export const NavigationLinks: NavigationLinksModel[] = [
  {
    title: 'Our Team',
    link: 'ourTeam',
  },
  {
    title: 'Contact Us',
    link: 'contactUs',
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
    link: 'https://discord.gg/Na5XW75G',
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
