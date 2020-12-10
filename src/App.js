import React from 'react';
import './App.sass';

import { Logo, Input, Search as SearchIcon } from './components';

const App = () => (
  <div className="container">
    <header className="main-header">
      <Logo />

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
        <Input icon={<SearchIcon className="search-icon" />} />
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
