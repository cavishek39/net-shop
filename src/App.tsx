import React from 'react'
import './App.css'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contacts from './pages/Contacts'
import Cart from './pages/Cart'
import SingleProduct from './pages/SingleProduct'
import ErrorPages from './pages/ErrorPages'

function App() {
  return (
    <ChakraProvider>
      <ColorModeProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/contact' element={<Contacts />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/singleproduct/:id' element={<SingleProduct />} />
            <Route path='*' element={<ErrorPages />} />
          </Routes>
        </Router>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default App
