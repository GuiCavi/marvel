import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { CharactersProvider } from './contexts/Characters';

ReactDOM.render(
  <React.StrictMode>
    <CharactersProvider>
      <App />
    </CharactersProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
