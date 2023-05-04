import React, { useEffect, useState } from 'react';

const PokemonDetail = ({ url }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemonData(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [url]);

  if (loading) {
    return <p>Loading pokemon data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!pokemonData) {
    return null;
  }

  const { name, sprites, types } = pokemonData;

  return (
    <div>
      <h2>{name}</h2>
      <img src={sprites.front_default} alt={name} />
      <ul>
        {types.map((type, index) => (
          <li key={index}>{type.type.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetail;
