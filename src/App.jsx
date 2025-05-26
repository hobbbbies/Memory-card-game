import { useState, useEffect } from 'react'
import Card from './components/Card'
import pokemonList from './pokemonList';
import Scoreboard from './components/Scoreboard';

import './styles/App.css'

function App() {
  const [cardsClicked, setCardsClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(Array(1).fill(0));
  const randomPokemon = pokemonList();

  function onCardClick(pokemonName) {
    setScore(score + 1);
    setCardsClicked(pokemonName)
  }

  useEffect(() => {
    if (cardsClicked === null) {
      setHighScore([...highScore, score]);
      setScore(0)
      alert("Oops! You already picked that card!");
      setCardsClicked([]);
    }
  }, [cardsClicked, score, highScore]);


  return (
    <div>
      <div id="name">Memory Game by Vitanov</div>
      <Scoreboard score={score} highScore={highScore} />
      <div className="board">
        {randomPokemon.map((pokemon, idx) => (
          <Card
            key={idx}
            pokemon={pokemon}
            cardsClicked={cardsClicked}
            setCardsClicked={onCardClick}
          />
        ))}
      </div>
    </div>
  )
}

export default App
