import React, {useEffect, useState} from 'react'

function FakeStore() {

    const [store, setStore] = useState([])

    useEffect(()=>{

        let controller =new AbortController()
        let options = {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            },
            signal: controller.signal
        }
        fetch('https://fakestoreapi.com/products', options)
        .then(res=>res.json())
        .then(data=>setStore(data))
        .catch(err => consolelog(err))
        .finally(() =>controller.abort())

      
    }, [])

  return (
    <>
    <ul>
       {store.map((usuario,index)=>
        <li key={usuario.id}>{usuario.title}</li>
       )} 
    </ul>
   


    </>
  )
}

export default FakeStore