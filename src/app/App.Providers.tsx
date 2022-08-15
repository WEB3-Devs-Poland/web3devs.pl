import { HashRouter } from 'react-router-dom';

import MobileMenuProvider from '../providers/MobileMenuProvider';
import ThemeProvider from '../theme/ThemeProvider';
import TranslationsProvider from '../translations/TranslationsProvider';
import { RemoveTrailingSlash } from './RemoveTrailingSlash';

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => (
  <TranslationsProvider>
    <HashRouter>
      <RemoveTrailingSlash />
      <ThemeProvider>
        <MobileMenuProvider>{children}</MobileMenuProvider>
      </ThemeProvider>
    </HashRouter>
  </TranslationsProvider>
);

export default Providers;
