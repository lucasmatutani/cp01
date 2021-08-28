import React from 'react'
import logo from './componentes/img/logo.svg'
import Header from './componentes/Header'
import Conteudo from './componentes/Conteudo'
import './App.css'

export default function App(){
  return(
    <div className='container'>      
      <Header/> 
      <Conteudo/>    
    </div>
  )
}

