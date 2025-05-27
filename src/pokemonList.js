import randomInteger from "./randomInteger";

export default function pokemonList(size) {
    const pokemon =  [
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

    const pokemonMedium = pokemon.filter((_, index) => {
        return index < 8;
    })

    const pokemonEasy = pokemon.filter((_, index) => {
        return index < 4;
    })

    let currArr;

    switch(size) {
        case '8': 
            currArr = pokemonMedium
            break;
        case '4': 
            currArr = pokemonEasy;
            break;
        default: 
            currArr = pokemon
            break;
    }

    let currentIndex = currArr.length;

    // Using Fisher-Yates shuffle algorithm
    while (currentIndex !== 0) {
        let randomIndex = randomInteger(currentIndex);
        currentIndex --;

        // Swap values 
        [currArr[currentIndex], currArr[randomIndex]] = [
            currArr[randomIndex], currArr[currentIndex]];
    }

    return currArr;
}