import { BrowserRouter } from 'react-router-dom';

import MobileMenuProvider from '../providers/MobileMenuProvider';
import ThemeProvider from '../theme/ThemeProvider';
import TranslationsProvider from '../translations/TranslationsProvider';
import { RemoveTrailingSlash } from './RemoveTrailingSlash';

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => (
  <TranslationsProvider>
    <BrowserRouter>
      <RemoveTrailingSlash />
      <ThemeProvider>
        <MobileMenuProvider>{children}</MobileMenuProvider>
      </ThemeProvider>
    </BrowserRouter>
  </TranslationsProvider>
);

export default Providers;
