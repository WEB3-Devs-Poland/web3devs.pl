import { Route, Routes } from 'react-router-dom';
import { BlogPage } from '../pages/BlogPage/BlogPage';
import { SinglePost } from '../pages/BlogPage/components/SinglePost';
import CommunityPage from '../pages/CommunityPage';
import LandingPage from '../pages/LandingPage';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import MobileMenu from '../components/MobileMenu';

import Providers from './App.Providers';
import { RemoveTrailingSlash } from './RemoveTrailingSlash';

const App = () => (
  <Providers>
    <Layout>
      <MobileMenu />
      <Header />

      <RemoveTrailingSlash />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:postId" element={<SinglePost />} />
      </Routes>

      <Footer />
    </Layout>
  </Providers>
);

export default App;
