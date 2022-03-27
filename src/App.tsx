import Header from 'components/Header';
import Layout from 'components/Layout';
import ThemeProvider from 'theme/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Header />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
