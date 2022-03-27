import { BrowserRouter } from 'react-router-dom';

import Header from 'components/Header';
import Layout from 'components/Layout';
import MobileMenu from 'components/MobileMenu';
import MobileMenuProvider from 'components/MobileMenu/MobileMenuProvider';
import ThemeProvider from 'theme/ThemeProvider';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <MobileMenuProvider>
          <Layout>
            <MobileMenu />
            <Header />
          </Layout>
        </MobileMenuProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
