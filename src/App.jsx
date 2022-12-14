//IMPORTACIONES
//1° librerias de react
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
//2° componentes de la app
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './containers/CartContainer/CartContainer'
import CartContextProvider from './context/CartContext'
//3° estilos 
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  let greeting = 'Home' //estado del componente, el cambio me re-renderiza, asi como el cambio de prop y eventos
  
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting={greeting}/> }/>
          <Route path='/cart' element={ <CartContainer/> }/>
          <Route path='/cat/:catId' element={ <ItemListContainer/> }/>
          <Route path='/detail/:productId' element={ <ItemDetailContainer/> }/>
          <Route path='*' element={ <Navigate to='/' /> }/> 
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
)}

export default App

