import KAdlerPNG from 'pages/LandingPage/assets/team/kacper-adler.jpg';
import MCholewkaPNG from 'pages/LandingPage/assets/team/maja-cholewka.png';
import PPaczoski from 'pages/LandingPage/assets/team/przemyslaw-paczoski.png';
import { SiLinkedin } from 'react-icons/si';

export const ourTeamMembers = [
  {
    name: 'Maja Cholewka',
    role: 'Founder',
    img: MCholewkaPNG,
    social: [
      {
        link: 'https://www.linkedin.com/in/majacholewka/',
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
];
