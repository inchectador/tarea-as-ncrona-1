import React from 'react'
import { useState, useEffect } from 'react'


function PokeAPI() {

    const [poke, setPoke] = useState({})

    useEffect(()=>{

      
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res=>res.json())
        .then(data=>{setPoke(data); console.log(data)})
        .catch(err => consolelog(err))
        .finally(() =>controller.abort())

    }, [])

  return (
    <>
    <ul>
       {poke.results.map((usuario,index)=>
        <li key={index}>{usuario.name}{usuario.url}</li>
       )} 
    </ul>
  
    
   


    </>
  )
}

export default PokeAPI