import KAdlerPNG from 'pages/LandingPage/assets/team/kacper-adler.png';
import Kkokosa from 'pages/LandingPage/assets/team/konrad-kokosa.png';
import LOlender from 'pages/LandingPage/assets/team/lukasz-olender.png';
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
