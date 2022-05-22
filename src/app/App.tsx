import LandingPage from 'pages/LandingPage';
import OurCommunity from 'pages/OurCommunity';
import IPFSRoute from 'providers/IPFSRouter/IPFSRoute';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import MobileMenu from 'components/MobileMenu';

import Providers from './App.Providers';

const App = () => {
  return (
    <Providers>
      <Layout>
        <MobileMenu />
        <Header />

        <IPFSRoute path="" component={<LandingPage />} />
        <IPFSRoute path="community" component={<OurCommunity />} />

        <Footer />
      </Layout>
    </Providers>
  );
};

export default App;
