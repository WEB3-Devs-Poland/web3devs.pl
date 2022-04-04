import KAdlerPNG from 'pages/LandingPage/assets/team/kacper-adler.png';
import MCholewkaPNG from 'pages/LandingPage/assets/team/maja-cholewka.png';
import MCieplak from 'pages/LandingPage/assets/team/mateusz-cieplak.png';
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
    name: 'Mateusz Cieplak',
    role: 'Co-Founder',
    img: MCieplak,
    social: [
      {
        link: 'https://www.linkedin.com/in/mateusz-cieplak/',
        Icon: SiLinkedin,
      },
    ],
  },
  {
    name: 'Kacper Adler',
    role: 'Community / DEV',
    img: KAdlerPNG,
    social: [
      {
        link: 'https://www.linkedin.com/in/kacperadler/',
        Icon: SiLinkedin,
      },
    ],
  },
];
