import randomInteger from "./randomInteger";

export default function pokemonList() {
    let pokemon =  [
        "Pikachu",
        "Charizard",
        "Bulbasaur",
        "Squirtle",
        "Jigglypuff",
        "Meowth",
        "Mewtwo",
        "Eevee",
        "Snorlax",
        "Gengar",
        "Lucario",
        "Gyarados"
    ]

    let currentIndex = pokemon.length;

    // Using Fisher-Yates shuffle algorithm
    while (currentIndex !== 0) {
        let randomIndex = randomInteger(currentIndex);
        currentIndex --;

        // Swap values 
        [pokemon[currentIndex], pokemon[randomIndex]] = [
            pokemon[randomIndex], pokemon[currentIndex]];
    }

    return pokemon;
}