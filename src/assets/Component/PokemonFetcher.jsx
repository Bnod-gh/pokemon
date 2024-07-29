import React, { useEffect, useState } from "react";

function PokemonFetcher({ getPokemon }) {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError]=useState('')
  const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20";

  const getPokemon_url = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const pokemon_list = data.results.map(async (currentPokemon) => {
        const sub_response = await fetch(currentPokemon.url);
        const sub_data = await sub_response.json();
        return sub_data;
      });
      const pokemonDetails=await Promise.all(pokemon_list)
      setPokemon(pokemonDetails);
      getPokemon(pokemonDetails);
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)

    }
  };
  

  useEffect(() => {
    getPokemon_url();
    
  }, []);

  if (loading){
    return<div>
      <h1 className="text-9xl flex h-screen w-screen justify-center items-center">Loading...</h1>
    </div>
  }

  if (error){
    return<div>
      <h1 className="text-2xl flex h-screen w-screen justify-center items-center">{error.message}</h1>
    </div>
  }
  return <div></div>;
}

export default PokemonFetcher;
