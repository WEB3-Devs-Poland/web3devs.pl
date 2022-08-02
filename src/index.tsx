import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import { Route, Routes } from 'react-router-dom';
import Providers from './app/App.Providers';
import MintPage from 'pages/MintPage';

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="mint" element={<MintPage />} />
      </Routes>
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);
