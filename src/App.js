import React from 'react';
import './App.sass';

import { Input, Search as SearchIcon, Header } from './components';

const App = () => (
  <div className="container">
    <Header user={{ name: 'Guilherme Cavichioli', role: 'Teste de Front-end' }} />

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
