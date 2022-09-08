import { NextPage } from "next";
import Image from "next/image";
import { Template } from "./Template";

const members = [
  {
    username: "Maja Cholewka",
    img: "",
    title: "Founder",
    links: [
      {
        name: "Linkedin",
        img: '',
        url: ""
      }
    ]
  },
  {
    username: "Łukasz Olender",
    img: "",
    title: "Marketing | Media",
    links: [
      {
        name: "Linkedin",
        img: '',
        url: ""
      }
    ]
  },
  {
    username: "Przemek Paczoski",
    img: "",
    title: "Developer",
    links: [
      {
        name: "Linkedin",
        img: '',
        url: ""
      }
    ]
  },
  {
    username: "Kacper Adler",
    img: "",
    title: "Developer",
    links: [
      {
        name: "Linkedin",
        img: '',
        url: ""
      }
    ]
  },
  {
    username: "Kuba Kolacja",
    img: "",
    title: "Consultant",
    links: [
      {
        name: "Linkedin",
        img: '',
        url: ""
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
          <div className="flex flex-col w-72 p-8 text-center space-y-2 m-4 rounded-md shadow-md shadow-slate-600" key={index}>
            <Image src={member.img} width={42} height={42}/>
            <h2 className="font-bold text-xl">{member.username}</h2>
            <span className="font-semibold text-black bg-white rounded-md">{member.title}</span>
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
