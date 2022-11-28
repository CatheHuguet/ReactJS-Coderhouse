//IMPORTACIONES
//1° librerias de react
import { useState } from 'react'
//2° componentes de la app
import ItemContainer from './components/Container/ItemContainer'
import NavBar from './components/NavBar/NavBar'
//3° estilos 
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  let greeting = 'hola:)' //estados
  
  return (
    <div className="App">
      <NavBar/>
      <ItemContainer
        greeting={greeting} 
      />
    </div>
  ) 
}

export default App

