import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout';
import { Menu } from 'components/Menu';
import { LandingPage } from 'pages/LandingPage';

import ThemeProvider from './theme';
import './translations';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
