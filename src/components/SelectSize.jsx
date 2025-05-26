import pokemonList from '../pokemonList';


export default function SelectSize( { setRandomPokemon } ) {
    
    function handleSelect(event) {
        setRandomPokemon(pokemonList(event.target.value));
    }
    
    return (
        <select className='select-size' onChange={handleSelect}>
            <option value="12">Hard</option>
            <option value="8">Medium</option>
            <option value="4">Easy</option>
        </select>
    )
}