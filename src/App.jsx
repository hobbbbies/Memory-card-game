import { useState, useEffect } from 'react'
import Card from './components/Card'
import pokemonList from './pokemonList';
import Scoreboard from './components/Scoreboard';
import SelectSize from './components/SelectSize';

import './styles/App.css'

function App() {
  const [cardsClicked, setCardsClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(Array(1).fill(0));
  const [difficulty, setDifficulty] = useState(12);
  const randomPokemon = pokemonList(difficulty);

  function onCardClick(pokemonName) {
    setScore(score + 1);
    setCardsClicked(pokemonName)
  }

  useEffect(() => {
    if (cardsClicked === null || score >= difficulty) {
      setHighScore([...highScore, score]);
      setScore(0)
      const alertText = score >= difficulty 
      ? "Congratulations! You won." 
      : "Oops! You already picked that card!";
      alert(alertText);
      setCardsClicked([]);
    }
  }, [cardsClicked, score, highScore, difficulty]);

  return (
    <div>
      <div id="name">Memory Game by Vitanov</div>
      <Scoreboard score={score} highScore={highScore} />
      <SelectSize setDifficulty={setDifficulty}/>
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
