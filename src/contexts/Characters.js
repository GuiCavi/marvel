/* eslint-disable react/prop-types */

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
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  async function getPage(page = 0, limit = ITEMS_PER_PAGE) {
    if (characters[page]) {
      return;
    }

    setIsLoading(true);

    try {
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
    } catch (error) {
      console.log('Error fetching data from API', error.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function searchCharacter(textToSearch) {
    try {
      // const values = Object.values(characters);

      // const filtered = values
      //   .map((arrOfCharacters) => arrOfCharacters
      //     .filter((value) => value.name.toLowerCase().includes(textToSearch.toLowerCase())));

      // setFilteredCharacters(Object.fromEntries(filtered.map((item, index) => [index, item])));

      if (textToSearch.length === 0) {
        setFilteredCharacters([]);
        return;
      }

      const response = await request({
        url: `/v1/public/characters?name=${textToSearch}`,
      });

      const parsedCharactersData = MarvelCharacterParser
        .parse(response.data.data.results);

      setFilteredCharacters(parsedCharactersData);
    } catch (error) {
      console.log('Error fetching data from API', error.message);
    }
  }

  useEffect(() => {
    getPage();
  }, []);

  return (
    <CharactersContext.Provider
      value={{
        ITEMS_PER_PAGE,

        filteredCharacters,
        totalCharacters,
        characters,
        isLoading,
        setIsLoading,
        getPage,
        searchCharacter,
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
