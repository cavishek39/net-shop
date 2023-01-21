/**
 * 1. Create a context
 * 2. Provider
 * 3. Consumer => useContext hook
 */

import React, { createContext, useContext } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={'Bak'}>{children}</AppContext.Provider>
}

// Custom hook
const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useAppContext }
