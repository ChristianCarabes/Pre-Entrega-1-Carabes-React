import NavBar from './assets/components/NavBar'
import ItemListContainer from './assets/components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './assets/components/ItemDetailContainer'
import { CartContextProvider } from './assets/context/CartContext'
import Cart from './assets/components/CartContainer'

function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App
