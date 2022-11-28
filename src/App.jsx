//IMPORTACIONES
//1° librerias de react
import { useState } from 'react'
//2° componentes de la app
import ItemListContainer from './components/Container/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
//3° estilos 
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
  let greeting = 'greeting prop' //estado del componente
  
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer
        greeting={greeting} 
      />
    </div>
  ) 
}

export default App

