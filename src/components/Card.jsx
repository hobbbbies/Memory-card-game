import "../styles/Card.css"
import { useState, useEffect } from "react";

export default function Card( { pokemon, cardsClicked, setCardsClicked } ) {
    const [pokemonObject, setPokemonObject] = useState({});
    // let pokemonObject = {};

    useEffect(() => {
        const getApiImg = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            const data = await response.json();
            setPokemonObject({ name: data.name, src: data.sprites.front_default }); 
        };
        getApiImg();
    }, [pokemon]);

    function handeClick() {
        if (cardsClicked.includes(pokemon)) {
            setCardsClicked(null);
        } else {
            const temp = [...cardsClicked];
            temp.push(pokemon);
            setCardsClicked(temp);
        }
    }

    return (
        <div className='card' onClick={handeClick}>
            <img style={{width: "300px"}} src={pokemonObject.src}/>
            <p>{pokemonObject.name}</p>
        </div>
    )
}