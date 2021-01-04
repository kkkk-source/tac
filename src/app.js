import React from 'react'
import Game from './game.js'

function Header() {
  return (
    <header>
      <h3>The Less</h3>
    </header>
  );
}

function App() {
  return (
    <>
      <Header />
      <Game />
    </>
  );
}

export default App;
