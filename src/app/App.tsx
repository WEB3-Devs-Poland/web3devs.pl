import { Outlet, Route, Routes } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import MobileMenu from '../components/MobileMenu';
import { BlogPage } from '../pages/BlogPage/BlogPage';
import { SinglePost } from '../pages/BlogPage/components/SinglePost';
import CommunityPage from '../pages/CommunityPage';
import LandingPage from '../pages/LandingPage';
import Providers from './App.Providers';

const App = () => (
  <Providers>
    <Layout>
      <MobileMenu />
      <Header />

      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<LandingPage />} />
          <Route path="community" element={<Outlet />}>
            <Route index element={<CommunityPage />} />
          </Route>
          <Route path="blog" element={<Outlet />}>
            <Route index element={<BlogPage />} />
            <Route path=":postId" element={<SinglePost />} />
          </Route>
        </Route>
      </Routes>

      <Footer />
    </Layout>
  </Providers>
);

export default App;
