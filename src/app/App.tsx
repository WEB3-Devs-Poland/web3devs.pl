import LandingPage from 'pages/LandingPage';
import OurCommunity from 'pages/OurCommunity';
import { Route, Routes } from 'react-router-dom';

import Providers from './App.Providers';

const App = () => {
  return (
    <Providers>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="ourCommunity" element={<OurCommunity />} />
      </Routes>
    </Providers>
  );
};

export default App;
