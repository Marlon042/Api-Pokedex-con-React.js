import React, { useState, useEffect, useRef } from 'react';
import withDataFetching from './withDataFetching';
import PokemonDetail from './PokemonDetail';

const PokemonList = ({ data, loading, error }) => {
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  

  const handleInputChange = (event) => {
    setSelectedPokemon(event.target.value.toLowerCase());
  };

  const filteredPokemon = data.filter((pokemon) =>
    pokemon.name.includes(selectedPokemon)
  );

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Pokemon List</h1>
      <input
        type="text"
        placeholder="Search for a pokemon..."
        value={selectedPokemon}
        onChange={handleInputChange}
        ref={inputRef}
      />
      <ul>
        {filteredPokemon.map((pokemon, index) => (
          <li key={index}>
            <PokemonDetail url={pokemon.url} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withDataFetching(PokemonList, () =>
  fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
    .then((response) => response.json())
    .then((data) => data.results)
);
