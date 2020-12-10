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
        <ul className="flat-list" id="characters-list">
          <header>
            <span className="caption">Personagem</span>
            <span className="caption series">Séries</span>
            <span className="caption events">Eventos</span>
          </header>

          <li className="characters-list-item">
            <div className="list character">
              <img src="https://via.placeholder.com/150" alt="" />
              <span className="bold">Abner Jenkins</span>
            </div>

            <div className="list series">
              <div>Iron man: Armor Wars</div>
              <div>Iron man: Armor Wars</div>
              <div>Iron man: Armor Wars</div>
            </div>

            <div className="list events">
              <span>AvX</span>
              <span>AvX</span>
              <span>AvX</span>
            </div>
          </li>
        </ul>
      </section>
    </main>

    <footer>
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    </footer>
  </div>
);

export default App;
