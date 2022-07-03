import KAdlerPNG from 'pages/LandingPage/assets/team/kacper-adler.png';
import Kkokosa from 'pages/LandingPage/assets/team/konrad-kokosa.png';
import LOlender from 'pages/LandingPage/assets/team/lukasz-olender.png';
import MCholewkaPNG from 'pages/LandingPage/assets/team/maja-cholewka.png';
import PPaczoski from 'pages/LandingPage/assets/team/przemyslaw-paczoski.png';
import { SiLinkedin } from 'react-icons/si';

export const ourTeamMembers = [
  {
    name: 'Maja Cholewka',
    role: 'Co-Founder',
    img: MCholewkaPNG,
    social: [
      {
        link: 'https://www.linkedin.com/in/majacholewka/',
        Icon: SiLinkedin,
      },
    ],
  },
  {
    name: 'Przemysław Paczoski',
    role: 'DEV',
    img: PPaczoski,
    social: [
      {
        link: 'https://www.linkedin.com/in/ppaczoski/',
        Icon: SiLinkedin,
      },
    ],
  },
  {
    name: 'Kacper Adler',
    role: 'DEV',
    img: KAdlerPNG,
    social: [
      {
        link: 'https://www.linkedin.com/in/kacperadler/',
        Icon: SiLinkedin,
      },
    ],
  },
  {
    name: 'Łukasz Olender',
    role: 'Community / Media',
    img: LOlender,
    social: [
      {
        link: 'https://www.linkedin.com/in/%C5%82ukasz-olender-815012237/',
        Icon: SiLinkedin,
      },
    ],
  },
  {
    name: 'Konrad Kokosa',
    role: 'DEV / YouTube',
    img: Kkokosa,
    social: [
      {
        link: 'https://www.linkedin.com/in/kkokosa/',
        Icon: SiLinkedin,
      },
    ],
  },
];
