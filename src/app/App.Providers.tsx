import MobileMenuProvider from 'providers/MobileMenuProvider';
import { HashRouter } from 'react-router-dom';

import ThemeProvider from 'theme/ThemeProvider';
import TranslationsProvider from 'translations/TranslationsProvider';

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => (
  <TranslationsProvider>
    <HashRouter>
      <ThemeProvider>
        <MobileMenuProvider>{children}</MobileMenuProvider>
      </ThemeProvider>
    </HashRouter>
  </TranslationsProvider>
);

export default Providers;
