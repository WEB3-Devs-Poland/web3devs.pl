import { WagmiConfig } from 'wagmi'
import MobileMenuProvider from 'providers/MobileMenuProvider';
import { BrowserRouter } from 'react-router-dom';
import { createClient, configureChains, defaultChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

import ThemeProvider from 'theme/ThemeProvider';
import TranslationsProvider from 'translations/TranslationsProvider';

interface Props {
  children: React.ReactNode;
}

const { provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
])

const client = createClient({
  provider,
  webSocketProvider,
})

const Providers = ({ children }: Props) => {
  return (
    <TranslationsProvider>
      <BrowserRouter>
        <ThemeProvider>
          <WagmiConfig client={client}>
            <MobileMenuProvider>{children}</MobileMenuProvider>
          </WagmiConfig>
        </ThemeProvider>
      </BrowserRouter>
    </TranslationsProvider>
  );
};

export default Providers;
