import React from 'react';
import './App.sass';

import LOGO from './assets/logo/logo.png';
import { Search as SearchIcon } from './components';

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

    <main className="main-content">
      <h1 className="title">Busca de personagens</h1>

      <div className="search-box">
        <label htmlFor="search" className="input-label">
          Nome do personagem
        </label>

        <div className="input-wrapper">
          <input type="text" id="search" className="input" placeholder="Search" />

          <SearchIcon className="search-icon" />
        </div>

      </div>

      <section>
        <ul>
          <li>
            <img src="" alt="" />
            <span>Abner Jenkins</span>
          </li>
        </ul>
      </section>
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
