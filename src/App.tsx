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
import Header from './components/Header'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle'

function App() {
  const theme = {
    colors: {
      heading: 'rgb(24 24 29)',
      text: 'rgb(24 24 29)',
      white: '#fff',
      black: ' #212529',
      helper: '#8490ff',
      bg: 'rgb(249 249 255)',
      footer_bg: '#0a1435',
      btn: 'rgb(98 84 243)',
      border: 'rgba(98, 84, 243, 0.5)',
      hr: '#ffffff',
      gradient:
        'linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)',
      shadow:
        'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;',
      shadowSupport: ' rgba(0, 0, 0, 0.16) 0px 1px 4px',
    },
    media: { mobile: '768px', tab: '998px' },
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
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
    </ThemeProvider>
  )
}

export default App
