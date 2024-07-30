import { useEffect, useState } from 'react'
import './App.css'
import Pokemon_Card from './assets/Component/Pokemon_Card'
import PokemonFetcher from './assets/Component/PokemonFetcher'

function App() {
  
  const [pokemonList,setPokemonList]=useState([]);
  const [searchPokemon,setSearchPokemon]=useState([])

  const handlePokemonData=(pokelist)=>{
    setPokemonList(pokelist)
    

    
  };
  // const SearchPokemon= pokemonList.filter((pokemonsearch)=>pokemonsearch.name.toLowerCase().includes(search.toLocaleLowerCase()));
 


  return (
    <div>
      <h1 className='text-white font-semibold text-7xl animate-bounce '>Gotta Catch 'Em All</h1>
      <div className="flex justify-center items-center">
      <input type="text" className=' outline-none text-slate-800 p-2 min-w-56 mt-2' placeholder='Search Pokemon' value={searchPokemon} onChange={(e)=>setSearch(e.target.value)}/>
    </div>
      <PokemonFetcher getPokemon={handlePokemonData}  pokemonsearch={searchPokemon}/>
      <Pokemon_Card cardData={pokemonList} />
      <button className='bg-white p-2 rounded-lg'>More..</button>
    </div>
  )
}

export default App
