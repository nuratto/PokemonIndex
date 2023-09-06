import React from 'react'
import { useState, useEffect } from 'react';

function Pokemon() {

    const [data, setData] = useState();
    const [show ,setSHot] = useState(false);
    const [pookemon, setPookemon] = useState("");
    // useEffect(() => {
    //     fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //     setData(data);
    //     console.log(data);
    // });
    // }, []);

    // const renderCounrty = function(data) {
    //     const html = `
    //             <div>
    //                 <img className=" w-[20rem] " src=${data.sprites.front_default} alt="" />
    //             </div>
    //             <div className="mt-6 text-white capitalize font-bold">
    //                 <h1 className=" text-xl p-3">${data.name}</h1>
    //                 <h2 className=" text-xl p-3">Type: ${data.types[0].type.name}</h2>
    //                 <h2 className=" text-xl p-3">Stat: ${data.stats[0].base_stat}</h2>
    //                 <h2 className=" text-xl p-3">Abilities 1: ${data.abilities[0].ability.name}</h2>
    //                 <h2 className=" text-xl p-3">Abilities 2: ${data.abilities[1].ability.name}</h2>
    //             </div>
    //       `;
      
    //       countriesContainer.insertAdjacentHTML('afterend', countriesContainer);
    //   }



    const searched = (p) => {

        if (p.trim() === "") {
            alert("Please enter a Pokemon name or ID.");
            return;
        }

        const formatPokemon = p.charAt(0).toLowerCase() + p.slice(1);

        fetch(`https://pokeapi.co/api/v2/pokemon/${formatPokemon}`)
        .then((response) => response.json())
        .then((data) => {
        setData(data);
        })
        .catch(err => alert(err));
        setSHot(!false);
    }

  return (
    <div className='text-center'>


        <input className='bg-red-500 py-2 px-3 text-white m-4 rounded-md' onChange={(e) => setPookemon(e.target.value)} type="text" />
        <button className=' bg-black py-2 px-5 text-white rounded-lg' onClick={() => {
            searched(pookemon);
            setSHot(true);
        }}>Search</button>


        <div className='grid grid-cols-1 p-5 countries'>
            <div className=' w-[40rem] bg-blue-800 rounded-md m-auto'>
                {show && data && (
                    <span className='flex'>
                        <div>
                            <img className=' w-[20rem] ' src={data.sprites.front_default} alt="" />
                        </div>
                        <div className='mt-6 text-white capitalize font-bold'>
                            <h1 className=' text-xl p-3'>{data.name}</h1>
                            <h2 className=' text-xl p-3'>Type: {data.types[0].type.name}</h2>
                            <h2 className=' text-xl p-3'>Stat: {data.stats[0].base_stat}</h2>
                            <h2 className=' text-xl p-3'>Abilities 1: {data.abilities[0].ability.name}</h2>
                            <h2 className=' text-xl p-3'>Abilities 2: {data.abilities[1].ability.name}</h2>
                        </div>
                    </span>
                )}
            </div>
        </div>

        
    </div>
  )
}

export default Pokemon