import { useTranslation } from 'react-i18next';
import { IconType } from 'react-icons';
import { SiDiscord, SiGithub } from 'react-icons/si';

type NavigationLinksModel = {
  title: string;
  link: string;
};

export const NavigationLinks = (): NavigationLinksModel[] => {
  const { t } = useTranslation();

  return [
    {
      title: t('header.ourTeam'),
      link: 'ourTeam',
    },
    {
      title: t('header.contactUs'),
      link: 'contactUs',
    },
  ];
};

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
  //   Icon: SiTwitter, //need to import this icon after uncomment
  //   link: 'https://twitter.com/home',
  // },
];
