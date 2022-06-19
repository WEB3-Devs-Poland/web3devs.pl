import CommunityPage from 'pages/CommunityPage';
import LandingPage from 'pages/LandingPage';
import { Route, Routes } from 'react-router-dom';

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

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>

        <Footer />
      </Layout>
    </Providers>
  );
};

export default App;
