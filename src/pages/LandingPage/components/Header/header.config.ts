import { useTranslation } from 'react-i18next';
import { IconType } from 'react-icons';
import { SiDiscord, SiGithub, SiTwitter, SiYoutube } from 'react-icons/si';

type NavigationLinksModel = {
  title: string;
  link: string;
};

export const NavigationLinks = (): NavigationLinksModel[] => {
  const { t } = useTranslation();

  return [
    {
      title: t('header.ourTeam'),
      link: '#ourTeam',
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
    link: 'https://discord.gg/aPCQdz5cQA',
  },
  {
    name: 'GitHub',
    Icon: SiGithub,
    link: 'https://github.com/WEB3-Devs-Poland',
  },
  {
    name: 'Twitter',
    Icon: SiTwitter,
    link: 'https://twitter.com/web3DevsPoland',
  },
  {
    name: 'YouTube',
    Icon: SiYoutube,
    link: 'https://www.youtube.com/channel/UCvV6USxk59dGeCQgxBp61bQ',
  },
];
