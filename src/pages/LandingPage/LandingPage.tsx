import Layout from 'components/Layout';

import Header from '../../components/Header';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import MobileMenuProvider from './providers/MobileMenuProvider';
import InviteToDiscord from './sections/InviteToDiscord';
import OurTeam from './sections/OurTeam';
import WhatWeDo from './sections/WhatWeDo';

const LandingPage = () => {
  return (
    <MobileMenuProvider>
      <Layout>
        <MobileMenu />
        <Header />
        <InviteToDiscord />
        <WhatWeDo />
        <OurTeam />
        <Footer />
      </Layout>
    </MobileMenuProvider>
  );
};

export default LandingPage;
