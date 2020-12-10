import React, { useState } from 'react';
import './App.sass';

import {
  Input, Search as SearchIcon, Header, FlatList, CharactersListItem, Pagination,
} from './components';

const App = () => {
  const [activePage, setActivePage] = useState(1);
  return (
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

      <footer className="main-footer">
        <Pagination
          pages={10}
          activePage={activePage}
          showOnly={5}
          onChangePage={(page) => setActivePage(page)}
        />
      </footer>
    </div>
  );
};

export default App;
