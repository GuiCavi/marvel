import React from 'react';
import './App.sass';

import LOGO from './assets/logo/logo.png';

const App = () => (
  <div className="container">
    <header className="main-header">
      <img src={LOGO} alt="" className="logo" />
      <div className="person-details">
        <div className="person-info">
          <span className="bold">Guilherme Cavichioli</span>
          <span>Teste de Front-end</span>
        </div>

        <div className="avatar">
          <span className="bold">CB</span>
        </div>
      </div>
    </header>

    <h1>Busca de personagens</h1>

    <div>
      <label htmlFor="search">
        Nome do personagem
        <input type="text" id="search" />
      </label>
    </div>

    <main>
      <ul>
        <li>
          <img src="" alt="" />
          <span>Abner Jenkins</span>
        </li>
      </ul>
    </main>

    <footer>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </footer>
  </div>
);

export default App;
