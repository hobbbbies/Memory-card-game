import { useState } from 'react'
import Card from './components/Card'
import pokemonList from './pokemonList';

import './styles/App.css'

function App() {
  const [cardsClicked, setCardsClicked] = useState([]);
  const randomPokemon = pokemonList();

  if (cardsClicked === null) {
    console.log("game over");
  }

  return (
    <>
      <div className="board">
        {randomPokemon.map((pokemon, idx) => (
          <Card
            key={idx}
            pokemon={pokemon}
            cardsClicked={cardsClicked}
            setCardsClicked={setCardsClicked}
          />
        ))}
      </div>
    </>
  )
}

export default App
