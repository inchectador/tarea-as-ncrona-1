import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Inicio from './pages/Inicio'
import './style/styles.css'
import Header from './Header'
import FakeStore from './pages/FakeStore'
import PokeAPI from './pages/PokeAPI'
import DnD from './pages/DnD'
import RandomUser from './pages/RandomUser'
import Holder from './pages/Holder'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/FakeStore' element={<FakeStore/>}/>
      <Route path='/PokeAPI' element={<PokeAPI/>}/>
      <Route path='/DnD' element={<DnD/>}/>
      <Route path='/RandomUser' element={<RandomUser/>}/>
      <Route path='/Holder' element={<Holder/>} />
    </Routes>
  </Router>
)
