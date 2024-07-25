import React from 'react';
import { createRoot } from 'react-dom/client';  // Importation de createRoot depuis react-dom/client
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);  // Créer la racine avec createRoot

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
