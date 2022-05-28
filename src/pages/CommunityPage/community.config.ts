import ASmolarek from 'pages/CommunityPage/assets/adam-smolarek.png';
import AChmaro from 'pages/CommunityPage/assets/artur-chmaro.png';
import KPusiak from 'pages/CommunityPage/assets/kuba-pusiak.png';
import MBudkowski from 'pages/CommunityPage/assets/maciej-budkowski.png';
import PDev from 'pages/CommunityPage/assets/pablo-dev.png';
import PKowalski from 'pages/CommunityPage/assets/pawel-kowalski.png';
import SPaluch from 'pages/CommunityPage/assets/szymon-paluch.png';
import {
  RiListCheck2 as BlogIcon,
  RiInstagramLine as InstagramIcon,
  RiMailSendLine as NewsletterIcon,
  RiMicLine as PodcastIcon,
  RiYoutubeLine as YoutubeIcon,
} from 'react-icons/ri';

export const ourCommunityMembers = [
  {
    name: 'Artur Chmaro',
    img: AChmaro,
    social: [
      {
        link: 'https://www.youtube.com/c/ArturChmaro',
        Icon: YoutubeIcon,
      },
      {
        link: 'https://landing.mailerlite.com/webforms/landing/v7a3r8',
        Icon: NewsletterIcon,
      },
      {
        link: 'https://www.instagram.com/fullstak_pl/?hl=pl',
        Icon: InstagramIcon,
      },
    ],
  },
  {
    name: 'Adam Smolarek',
    img: ASmolarek,
    social: [
      {
        link: 'https://chaindev.pl/',
        Icon: BlogIcon,
      },
      {
        link: 'https://chaindev.pl/m',
        Icon: NewsletterIcon,
      },
    ],
  },
  {
    name: 'Kuba Pusiak',
    img: KPusiak,
    social: [
      {
        link: 'https://www.youtube.com/channel/UCqawL4rsFulZi1zjpromBNQ',
        Icon: YoutubeIcon,
      },
      {
        link: 'https://jsdzem.pl/newsletter/',
        Icon: NewsletterIcon,
      },
    ],
  },

  {
    name: 'Szymon Paluch',
    img: SPaluch,
    social: [
      {
        link: 'https://www.youtube.com/channel/UC7PC5cYdtf9O6TsAMxTx9Og',
        Icon: YoutubeIcon,
      },
      {
        link: 'https://www.instagram.com/szymonpaluch.eth/?hl=pl',
        Icon: InstagramIcon,
      },
    ],
  },
  {
    name: 'PabloDev',
    img: PDev,
    addBackground: true,
    social: [
      {
        link: 'https://itswebdev.com/',
        Icon: NewsletterIcon,
      },
    ],
  },

  {
    name: 'Maciej Budkowski',
    img: MBudkowski,
    social: [
      {
        link: 'https://anchor.fm/web3-talks/',
        Icon: PodcastIcon,
      },
    ],
  },

  {
    name: 'Paweł Kowalewski',
    img: PKowalski,
    social: [
      {
        link: 'https://www.youtube.com/channel/UCRAD6DLx97zw9AOX1Gwj77Q',
        Icon: YoutubeIcon,
      },
    ],
  },
];
