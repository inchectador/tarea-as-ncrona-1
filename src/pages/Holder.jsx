import React from 'react'
import { useEffect, useState } from 'react'

function Holder() {
    const [holder, setHolder] = useState([])

    useEffect(()=>{

        let controller =new AbortController()
        let options = {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            },
            signal: controller.signal
        }
        fetch("https://jsonplaceholder.typicode.com/todos", options)
        .then(res=>res.json())
        .then(data=>setHolder(data))
        .catch(err => console.log(err))
        .finally(() =>controller.abort())

    }, [])

  return (
    <>
    <ul>
       {holder.map((usuario,index)=>
        <li key={index}>{usuario.title}</li>
       )} 
    </ul>
 


    </>
  )
}

export default Holder