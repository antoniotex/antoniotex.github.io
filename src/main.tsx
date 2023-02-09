import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppContextProvider, { AppContext } from './store/AppContext';

import './lib/i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
