/* eslint-disable react/prop-types */

// /v1/public/characters
// limit=10&offset=0

import React, {
  createContext, useContext, useEffect, useState,
} from 'react';

import { MarvelCharacterParser } from '../helpers/MarvelCharacterParser';
import request from '../utils/request';

const CharactersContext = createContext({});

const ITEMS_PER_PAGE = 10;

export const CharactersProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState({});
  const [totalCharacters, setTotalCharacters] = useState(ITEMS_PER_PAGE);

  async function getPage(page = 0, limit = ITEMS_PER_PAGE) {
    console.log(page);
    if (characters[page]) {
      return;
    }

    setIsLoading(true);

    const response = await request({
      url: `/v1/public/characters?limit=${limit}&offset=${page * limit}`,
      method: 'GET',
    });

    const charactersClone = { ...characters };
    if (!charactersClone[page]) charactersClone[page] = [];

    const parsedCharactersData = MarvelCharacterParser
      .parse(response.data.data.results)
      .filter((character) => !charactersClone[page].some(((value) => value.id === character.id)))
      .sort((a, b) => a.name.localeCompare(b.name));

    setCharacters({
      ...characters,
      [page]: [...charactersClone[page], ...parsedCharactersData],
    });
    setTotalCharacters(response.data.data.total);
    setIsLoading(false);
  }

  useEffect(() => {
    getPage();
  }, []);

  return (
    <CharactersContext.Provider
      value={{
        ITEMS_PER_PAGE,

        totalCharacters,
        characters,
        isLoading,
        setIsLoading,
        getPage,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharacters = () => {
  const context = useContext(CharactersContext);

  return context;
};
