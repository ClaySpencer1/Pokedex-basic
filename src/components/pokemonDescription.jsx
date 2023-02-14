
export function PokemonDescription({
  pokemonName,
  pokemonNum, 
  pokemonType,
  pokemonWeakness = [],
}) {
  return (
        <li> 
          <p>Name:</p>
          <p><strong>{pokemonName}</strong></p>
          <p>
            <strong>Type:</strong>
          </p>
          <p>
            {pokemonType.map((e, index) => {
              return <span className={e} key={index}>{e} </span>;
            })}
          </p>
          <p>
            <strong>Weaknesses:</strong>
          </p>
          <p>
            {pokemonWeakness.map((e, index) => {
              return <span className={e} key={index}>{e} </span>;
            })}
          </p>
        
        </li>
      
  );
}

