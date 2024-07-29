import React, { useState } from 'react'

function Pokemon_Card({cardData}) {
    
  return (
    <div >
      <div >
      <ul className="flex justify-center items-center flex-wrap ">
        {cardData.map((pokemoncard_data) => (
            
            <li
            key={pokemoncard_data.id}
            className="min-w-72 m-10 min-h-[460px] bg-white border border-gray-200 rounded-lg shadow text-black flex items-center flex-col p-4 capitalize hover:scale-150 hover:animate-pulse hover:bg-slate-900 hover:border-none"
          >
            <figure>
              <img
                src={pokemoncard_data.sprites.other.dream_world.front_default}
                alt={pokemoncard_data.name}
                className="w-40 h-40 "
              />
            </figure>
            <header className="text-2xl text-slate-700 capitalize ">
              {pokemoncard_data.name}
            </header>
            <div className="bg-green-500 rounded-xl flex flex-row min-w-20 items-center justify-center">
             <p className="text-white px-2">{pokemoncard_data.types.map(items => 
               items.type.name).join(", ")}</p> 
              
            </div>
            <div>
              <div className="flex gap-3 mt-2 bg-slate-400 p-2 font-medium rounded">
                <h4>Height: {pokemoncard_data.height}</h4>
                <h4>Weight: {pokemoncard_data.weight}</h4>
                <h4>Speed: {pokemoncard_data.stats[5].base_stat}</h4>
              </div>
              <div className="flex justify-between mt-2 bg-slate-400 p-2 font-medium rounded">
                <h4>Experience: {pokemoncard_data.base_experience}</h4>
                <h4>Attack: {pokemoncard_data.stats[1].base_stat}</h4>
              </div> 
              <div className=" bg-slate-400 mt-2 font-medium rounded min-h-20 pl-2" >Abilities:  {pokemoncard_data.abilities.map((items,index)=><ol className="  ml-20 " key={index}>- {items.ability.name}</ol>)}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Pokemon_Card
