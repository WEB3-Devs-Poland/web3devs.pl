import IPFSRouterProvider from 'providers/IPFSRouter';
import MobileMenuProvider from 'providers/MobileMenuProvider';

import ThemeProvider from 'theme/ThemeProvider';
import TranslationsProvider from 'translations/TranslationsProvider';

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <TranslationsProvider>
      <IPFSRouterProvider>
        <ThemeProvider>
          <MobileMenuProvider>{children}</MobileMenuProvider>
        </ThemeProvider>
      </IPFSRouterProvider>
    </TranslationsProvider>
  );
};

export default Providers;
