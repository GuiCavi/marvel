import React, { useCallback, useState } from 'react';
import './App.sass';

import {
  Input, Search as SearchIcon, Header, FlatList, CharactersListItem, Pagination,
} from './components';
import { useCharacters } from './contexts/Characters';

const App = () => {
  const [activePage, setActivePage] = useState(1);

  const {
    isLoading,
    characters,
    ITEMS_PER_PAGE,
    totalCharacters,
    getPage,
    searchCharacter,
    filteredCharacters,
  } = useCharacters();

  const onChangePage = useCallback((page) => {
    getPage(page - 1);
    setActivePage(page);
  }, [getPage]);

  return (
    <div className="container">
      <Header user={{ name: 'Guilherme Cavichioli', role: 'Teste de Front-end' }} />

      <main className="main-content">
        <h1 className="title">Busca de personagens</h1>

        <div className="search-box">
          <Input
            label="Nome do personagem"
            icon={<SearchIcon className="search-icon" />}
            onSubmit={(text) => searchCharacter(text)}
          />
        </div>

        <section>
          <FlatList
            id="characters-list"
            isLoading={isLoading}
            listHeader={['Personagem', 'Séries', 'Eventos']}
            hideHeaders={[1, 2]}
            data={
              filteredCharacters.length > 0
                ? filteredCharacters
                : characters[activePage - 1]
            }
            renderItem={(item) => <CharactersListItem key={item.id} item={item} />}
          />
        </section>
      </main>

      <footer className="main-footer">
        <Pagination
          pages={Math.ceil(totalCharacters / ITEMS_PER_PAGE)}
          activePage={activePage}
          showOnly={5}
          onChangePage={onChangePage}
        />
      </footer>
    </div>
  );
};

export default App;
