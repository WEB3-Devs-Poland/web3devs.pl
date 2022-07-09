import React from 'react';
import { configureChains, createClient, defaultChains } from 'wagmi';
import { WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const { provider, webSocketProvider } = configureChains(defaultChains, [publicProvider()]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

const WagmiProvider: React.FC<any> = ({ children }) => {
  return <WagmiConfig client={client}>{children}</WagmiConfig>;
};

export default WagmiProvider;
