//IMPORTACIONES
//1° librerias de react
import { useState } from 'react'
//2° componentes de la app
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
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
    <ItemDetailContainer/>
    </div>
  ) 
}

export default App

