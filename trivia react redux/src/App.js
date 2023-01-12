import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Config from './pages/Config';
import Game from './pages/Game';
import Login from './pages/Login';
import './pages/Login.css';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/config" component={ Config } />
      <Route path="/game" component={ Game } />
    </Switch>
  );
}
