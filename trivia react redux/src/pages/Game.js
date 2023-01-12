import React, { Component } from 'react';
import Counter from '../components/Counter';
import Header from '../components/Header';

class Game extends Component {
  render() {
    return (
      <div>
        <h1>Game</h1>
        <Header />
        <Counter />
      </div>
    );
  }
}
export default Game;
