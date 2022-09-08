import { NextPage } from 'next';
import { Navbar } from '../components';
import { Hero, Partners, Team } from '../sections';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />

      <main className="pt-32 space-y-32">
        <Hero />
        <Partners />
        <Team />
      </main>
    </>
  );
};

export default Home;
