import React from 'react'

function Header() {
  return (
    <div className=' bg-red-500 w-full h-[30rem]'>
        <div className=' text-center'>
            <h1 className=' text-7xl py-5 font-bold tracking-wide text-wide text-white'>Pokedex</h1>
            <img className='w-2/12 m-auto' src="pokeball.webp" alt="" />
        </div>
    </div>
  )
}

export default Header