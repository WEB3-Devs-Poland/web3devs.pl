import { BrowserRouter } from 'react-router-dom';

import Header from 'components/Header';
import Layout from 'components/Layout';
import ThemeProvider from 'theme/ThemeProvider';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <Header />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
