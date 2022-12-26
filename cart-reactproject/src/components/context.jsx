import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext()

const defaultStates = {
  cart: cartItems,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultStates)

  const clearAll = () => {
    dispatch({ type: 'CLEAR_ALL' })
  }

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }

  const increaseDecrease = (id, incDec) => {
    dispatch({ type: 'INCREASE_DECREASE', payload: { id, incDec } })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearAll,
        remove,
        increaseDecrease,
      }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
