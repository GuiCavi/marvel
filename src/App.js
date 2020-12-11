import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';

import './App.sass';
import { Header } from './components';
import { CharactersList, CharactersDetails } from './pages';

const App = () => (
  <div className="container">
    <Header user={{ name: 'Guilherme Cavichioli', role: 'Teste de Front-end' }} />

    <Router>
      <Switch>
        <Route exact path="/">
          <CharactersList />
        </Route>

        <Route path="/details">
          <CharactersDetails />
        </Route>

        <Redirect to="/" />
      </Switch>
    </Router>

  </div>
);

export default App;
