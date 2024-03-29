import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <p className='header__logo'>API</p>
        <ul className='header__lista'>
            <li className='header__elementoLista'><Link to={'/FakeStore'}>FakeStore</Link></li>
            <li className='header__elementoLista'><Link to={'/RandomUser'}>RandomUser</Link></li>
            <li className='header__elementoLista'><Link to={'/DnD'}>DnD</Link></li>
            <li className='header__elementoLista'><Link to={'/Holder'}>JsonPlaceholder</Link></li>
            <li className='header__elementoLista'><Link to={'/PokeAPI'}>PokeApi</Link></li>
        </ul>
    </div>
  )
}

export default Header