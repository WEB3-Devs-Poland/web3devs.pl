import LandingPage from 'pages/LandingPage';
import OurCommunity from 'pages/OurCommunity';
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
          <Route index element={<LandingPage />} />
          <Route path="ourCommunity" element={<OurCommunity />} />
        </Routes>

        <Footer />
      </Layout>
    </Providers>
  );
};

export default App;
