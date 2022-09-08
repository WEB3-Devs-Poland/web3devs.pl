import { NextPage } from 'next';
import { Template } from './Template';

export const Hero: NextPage = () => {
  return (
    <Template id="hero">
      <h1 className="mx-auto text-4xl text-center font-bold text-white"><span className="text-purple-700">Web3</span> Devs Poland</h1>

      <h3 className="mx-auto mt-4 text-xl text-center text-white">We learn, share experiences and build projects together. <br/> If you&apos;re interested in Web3, this place is for you.</h3>
    </Template>
  );
};
