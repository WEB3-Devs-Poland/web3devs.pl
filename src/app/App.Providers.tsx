import { BrowserRouter } from 'react-router-dom';

import ThemeProvider from 'theme/ThemeProvider';
import TranslationsProvider from 'translations/TranslationsProvider';

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <TranslationsProvider>
      <BrowserRouter>
        <ThemeProvider>{children}</ThemeProvider>
      </BrowserRouter>
    </TranslationsProvider>
  );
};

export default Providers;
