import { BlogPage } from 'pages/BlogPage/BlogPage';
import CommunityPage from 'pages/CommunityPage';
import LandingPage from 'pages/LandingPage';
import { Route, Routes } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Layout from 'components/Layout';
import MobileMenu from 'components/MobileMenu';

const App = () => {
  return (
    <Layout>
      <MobileMenu />
      <Header />

      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/blog/*" element={<BlogPage />} />
      </Routes>

      <Footer />
    </Layout>
  );
};

export default App;
