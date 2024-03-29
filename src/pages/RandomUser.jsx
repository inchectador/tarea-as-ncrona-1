import React from 'react'
import { useEffect, useState } from 'react'

function RandomUser() {
    const [random, setRandom] = useState({})

    useEffect(()=>{

      const{VITE_RANDOMUSER} = import.meta.env;
        let controller =new AbortController()
        let options = {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            },
            signal: controller.signal
        }
        fetch(VITE_RANDOMUSER, options)
        .then(res=>res.json())
        .then(data=>{setRandom(data); console.log(data)})
        .catch(err => console.log(err))
        .finally(() =>controller.abort())

    }, [])

  return (
    <>
    <ul>
        {random.results.map((usuario,index)=>
        <li key={index}>{usuario.name.first} {usuario.name.last}, live in {usuario.location.state}</li>
       )}  
    </ul>
   


    </>
  )
}

export default RandomUser