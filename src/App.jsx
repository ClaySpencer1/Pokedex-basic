import { useEffect, useState } from "react";
import { Header, PokemonDescription } from "./components/index";
import {  pokemonFilter , getPokeTypes } from "./components/pokeStuff";
import "./components/style.css";
import "./App.css";

function App() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonWeakness, setPokemonWeakness] = useState("");

  function getPokemon() {
    const fetchPokemon = fetch(
      `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`
    );
    fetchPokemon
      .then((res) => res.json())
      .then((data) => {
       setPokemonArray(data.pokemon); 
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getPokemon();
  }, []);

  const pokemonTypes = getPokeTypes(pokemonArray);

  const filteredPokemon = pokemonFilter(pokemonArray, pokemonName, pokemonType, pokemonWeakness);

  return (
    <div>
      <Header />
      <div>
        <div>
          <label htmlFor="selectName">Select Pokemon by Name</label>
          <select
            id="selectName"
            onChange={(event) => {
              setPokemonName(event.target.value);
            }}
          >
            <option value="">Select an Option</option>
            {pokemonArray.map((element) => {
              return (
                <option key={element.id + element.name} value={element.name}>
                  {element.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="selectType">Select Pokemon by Type</label>
          <select
            id="selectType"
            onChange={(event) => {
              setPokemonType(event.target.value);
            }}
          >
            <option value="">Select an Option</option>
            {pokemonTypes.map((element) => {
              return (
                <option key={element} value={element}>
                  {element}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="selectWeakness">Select Pokemon by Weakness</label>
          <select
            id="selectWeakness"
            onChange={(event) => {
              setPokemonWeakness(event.target.value);
            }}
          >
            <option value="">Select an Option</option>
            {pokemonTypes.map((element, index) => {
              return (
                <option key={element + index} value={element}>
                  {element}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <ol>
        {filteredPokemon.length > 0
          ? filteredPokemon.map((element) => {
              return (
                <PokemonDescription
                  key={element.id}
                  pokemonName={element.name}
                  pokemonNumber={element.num}
                  pokemonType={element.type}
                  pokemonWeakness={element.weaknesses}
                />
              );
            })
          : filteredPokemon &&
           <h1>Pokemon Does Not Exist</h1>
            }
      </ol>

    </div>
  );
}

export default App;