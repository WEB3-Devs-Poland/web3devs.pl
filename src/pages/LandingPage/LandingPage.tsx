import Layout from 'components/Layout';

import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import MobileMenuProvider from './providers/MobileMenuProvider';
import InviteToDiscord from './sections/InviteToDiscord';

const LandingPage = () => {
  return (
    <MobileMenuProvider>
      <Layout>
        <MobileMenu />
        <Header />
        <InviteToDiscord />
      </Layout>
    </MobileMenuProvider>
  );
};

export default LandingPage;
