import React from 'react'
import { useState, useEffect } from 'react'


function PokeAPI() {

    const [poke, setPoke] = useState({})

    useEffect(()=>{

      const{VITE_POKE} = import.meta.env;
      let controller =new AbortController()
      let options = {
          method: 'GET',
          headers: {
              'Content-Type':'application/json'
          },
          signal: controller.signal
      }
        fetch(VITE_POKE, options)
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