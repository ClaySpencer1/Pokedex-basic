function pokemonFilter(pokemonArray, pokemonName = "", pokemonType = "", pokemonWeakness = "" ) {
    let filteredPokemon = [];

    if (pokemonArray) { 
        filteredPokemon = pokemonArray;

    if (pokemonName){
        filteredPokemon = filteredPokemon.filter((element) => {
            return element.name === pokemonName;
        });
    }
    if (pokemonType) {
        filteredPokemon = filteredPokemon.filter((element) => {
            return element.type.includes(pokemonType);
        });
    }
    if (pokemonWeakness) {
        filteredPokemon = filteredPokemon.filter((element) => {
            return element.weaknesses.includes(pokemonWeakness);
        });
    }

    return filteredPokemon;
    }
}

function getPokeTypes(pokemonArray) {
    const arrayType = [];
    pokemonArray.map((element) => {
        element.type.map((e) => {
            if (!arrayType.includes(e)) {
                arrayType.push(e);
            }
        });
    });
    return arrayType;
}


export { getPokeTypes, pokemonFilter };