import Footer from './components/Footer';
import InviteToDiscord from './sections/InviteToDiscord';
import OurTeam from './sections/OurTeam';
import WhatWeDo from './sections/WhatWeDo';

const LandingPage = () => {
  return (
    <>
      <InviteToDiscord />
      <WhatWeDo />
      <OurTeam />
      <Footer />
    </>
  );
};

export default LandingPage;
