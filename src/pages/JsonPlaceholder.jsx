
import React from 'react'
import { useEffect, useState } from 'react'

function place() {
    const [placeholder, setPlaceholder] = useState({})

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
        .then(data=>setPlaceholder(data))
        .catch(err => consolelog(err))
        .finally(() =>controller.abort())

    }, [])

  return (
    <>
    <ul>
       {placeholder.map((usuario,index)=>
        <li key={index}>{usuario.title}</li>
       )} 
    </ul>
   {/* tienes que ver poco a poco este tipo de APIS porque el array estaba dentro de skills, míratelo en casa  */}


    </>
  )
}

export default place;