import Layout from 'components/Layout';

import Footer from './components/Footer';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import MobileMenuProvider from './providers/MobileMenuProvider';
import InviteToDiscord from './sections/InviteToDiscord';
import OurTeam from './sections/OurTeam';

const LandingPage = () => {
  return (
    <MobileMenuProvider>
      <Layout>
        <MobileMenu />
        <Header />
        <InviteToDiscord />
        <OurTeam />
        <Footer />
      </Layout>
    </MobileMenuProvider>
  );
};

export default LandingPage;
