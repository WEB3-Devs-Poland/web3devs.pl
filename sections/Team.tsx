import { NextPage } from 'next';
import Image from 'next/image';
import { Template } from './Template';

const members = [
  {
    username: 'Maja Cholewka',
    img: '/assets/team/maja-cholewka.png',
    title: 'Founder',
    links: [
      {
        name: 'Linkedin',
        img: '',
        url: ''
      }
    ]
  },
  {
    username: 'Łukasz Olender',
    img: '/assets/team/lukasz-olender.png',
    title: 'Marketing | Media',
    links: [
      {
        name: 'Linkedin',
        img: '',
        url: ''
      }
    ]
  },
  {
    username: 'Przemek Paczoski',
    img: '/assets/team/przemyslaw-paczoski.png',
    title: 'Developer',
    links: [
      {
        name: 'Linkedin',
        img: '',
        url: ''
      }
    ]
  },
  {
    username: 'Kacper Adler',
    img: '/assets/team/kacper-adler.png',
    title: 'Developer',
    links: [
      {
        name: 'Linkedin',
        img: '',
        url: ''
      }
    ]
  },
  {
    username: 'Kuba Kolacja',
    img: '',
    title: 'Consultant',
    links: [
      {
        name: 'Linkedin',
        img: '',
        url: ''
      }
    ]
  }
];

export const Team: NextPage = () => {
  return (
    <Template id="team">
      <h1 className="mx-auto text-4xl text-center font-bold text-white">Meet the <span className="text-purple-700">Team</span></h1>

      <div className="flex flex-row flex-wrap justify-center">
        {members.map((member, index) => (
          <div className="flex flex-col w-72 p-8 text-center space-y-2 lg:m-4 my-4 border-[0.5px] border-purple-700 rounded-md shadow-sm shadow-slate-700" key={index}>
            <img className="mx-auto w-36 h-auto rounded-md mb-4" src={member.img} alt="member-img"/>
            
            
            <h2 className="font-bold text-xl">{member.username}</h2>
            <span className="font-bold text-sm p-1 text-black bg-white rounded-md">{member.title}</span>
            {member.links.map((link, index) => (
              <div className="" key={index}>
                {link.name}
              </div>
            ))}
          </div>
        ))}      
      </div>
      
    </Template>
  );
};
