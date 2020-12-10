import React from 'react';
import './App.sass';

import {
  Input, Search as SearchIcon, Header, FlatList, CharactersListItem,
} from './components';

const App = () => (
  <div className="container">
    <Header user={{ name: 'Guilherme Cavichioli', role: 'Teste de Front-end' }} />

    <main className="main-content">
      <h1 className="title">Busca de personagens</h1>

      <div className="search-box">
        <Input icon={<SearchIcon className="search-icon" />} />
      </div>

      <section>
        <FlatList
          id="characters-list"
          listHeader={['Personagem', 'Séries', 'Eventos']}
          hideHeaders={[1, 2]}
          data={[
            {
              id: 1,
              image: 'https://via.placeholder.com/150',
              name: 'Abner Jenkins',
              series: ['Iron Man: Armor Wars', 'Iron Man: Armor Wars', 'Iron Man: Armor Wars'],
              events: ['AvX', 'AvX', 'AvX'],
            },
          ]}
          renderItem={(item) => <CharactersListItem item={item} />}
        />
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
