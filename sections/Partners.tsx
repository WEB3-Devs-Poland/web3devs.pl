import { NextPage } from 'next';
import { Template } from './Template';

const partners = [
  '/assets/partners/bvhub/logo-dark-theme.png',
  '/assets/partners/daftcode/logo-dark-theme.png',
  '/assets/partners/elympics/logo-dark-theme.png',
  '/assets/partners/firestarters/logo-dark-theme.png',
  '/assets/partners/hashup/logo-dark-theme.png',
  '/assets/partners/unimind/logo-dark-theme.png'
];

export const Partners: NextPage = () => {
  return (
    <Template id="partners">
      <h1 className="mx-auto text-4xl text-center font-bold text-white">Partners</h1>

      
      <div className="flex flex-row flex-wrap mx-auto justify-center">
        {partners.map((partner, index) => (
          // <div key={index} className="flex flex-1 mx-auto">
          <img src={partner} key={index} alt="partner-logo" className="p-8 w-64 h-auto my-auto" />
          // </div>
          
        ))}
      </div>
    </Template>
  );
};
