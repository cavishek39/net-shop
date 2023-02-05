/**
 * 1. Create a context
 * 2. Provider
 * 3. Consumer => useContext hook
 */

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import reducer from '../reducer/product'

const API_URL = 'https://fakestoreapi.com/products?limit=10'

const AppContext = createContext()

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isLoadingSingleProduct: false,
  singleProduct: {},
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

  const getSingleProductDetails = useCallback((productId = 0) => {
    dispatch({ type: 'SET_LOADING_SINGLE_PRODUCT' })

    // console.log('selectedProductId in Product context ', productId)

    fetch(`https://fakestoreapi.com/products/${productId}`).then((response) => {
      response
        .json()
        .then((data) => {
          dispatch({ type: 'SET_SINGLE_PRODUCT', payload: data })
        })
        .catch((err) => {
          dispatch({ type: 'API_ERROR' })
          console.error(err.message)
        })
    })
  }, [])

  useEffect(() => {
    getSingleProductDetails()
  }, [getSingleProductDetails])

  return (
    <AppContext.Provider value={{ ...state, getSingleProductDetails }}>
      {children}
    </AppContext.Provider>
  )
}

// Custom hook
const useProductContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useProductContext }
