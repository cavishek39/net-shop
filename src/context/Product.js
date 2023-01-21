/**
 * 1. Create a context
 * 2. Provider
 * 3. Consumer => useContext hook
 */

import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from '../reducer/product'

const API_URL = 'https://fakestoreapi.com/products?limit=10'

const AppContext = createContext()

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    // Set loading to true while we're fetching data
    dispatch({ type: 'SET_LOADING' })

    fetch(API_URL).then((response) => {
      response
        .json()
        .then((data) => {
          // console.log('Response ', data)
          dispatch({ type: 'SET_ALL_PRODUCTS', payload: data })
        })
        .catch((err) => {
          dispatch({ type: 'API_ERROR' })
          console.error(err.message)
        })
    })
  }, [])

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}

// Custom hook
const useProductContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useProductContext }
