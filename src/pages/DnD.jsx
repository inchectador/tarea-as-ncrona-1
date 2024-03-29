import React from 'react'
import { useEffect, useState } from 'react'

function DnD() {
    const [dnd, setDnd] = useState({})

    useEffect(()=>{

      const {VITE_DND} = import.meta.env;

        let controller =new AbortController()
        let options = {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            },
            signal: controller.signal
        }
        fetch(VITE_DND, options)
        .then(res=>res.json())
        .then(data=>{setDnd(data); console.log(data)})
        .catch(err => console.log(err))
        .finally(() =>controller.abort())

    }, [])

  return (
    <>
    <ul>
      <li>{dnd.full_name}</li>
        {dnd.skills.map((usuario,index)=>
        <li key={index}>{usuario.name} {usuario.index} {usuario.url}</li>
       )}  
    </ul>
   {/* tienes que ver poco a poco este tipo de APIS porque el array estaba dentro de skills, míratelo en casa  */}


    </>
  )
}

export default DnD