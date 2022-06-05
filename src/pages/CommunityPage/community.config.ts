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
  RiWindow2Line as WebsiteIcon,
  RiYoutubeLine as YoutubeIcon,
} from 'react-icons/ri';

export const ourCommunityMembers = [
  {
    name: 'Artur Chmaro',
    img: AChmaro,
    bio: 'Fullstack DEV',
    addBackground: false,
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
    bio: 'Blockchain DEV',
    addBackground: false,
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
    bio: 'Frontend DEV',
    addBackground: false,
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
    bio: 'IT Consultant',
    addBackground: false,
    social: [
      {
        link: 'https://www.youtube.com/channel/UC7PC5cYdtf9O6TsAMxTx9Og',
        Icon: YoutubeIcon,
      },
      {
        link: 'https://www.instagram.com/szymonpaluch.eth/?hl=pl',
        Icon: InstagramIcon,
      },
      {
        link: 'https://szymonpaluch.com/',
        Icon: WebsiteIcon,
      },
    ],
  },
  {
    name: 'Paweł Marszalec',
    img: PDev,
    bio: 'DEV',
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
    bio: 'Host @ WEB3 talks',
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
    bio: 'DEV',
    addBackground: false,
    social: [
      {
        link: 'https://www.youtube.com/channel/UCRAD6DLx97zw9AOX1Gwj77Q',
        Icon: YoutubeIcon,
      },
    ],
  },
];
