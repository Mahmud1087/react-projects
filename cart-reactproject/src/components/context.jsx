import React, { useState, useContext, useReducer, useEffect } from 'react'
// import cartItems from './data'
import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext()

const defaultStates = {
  cart: [],
  total: 0,
  amount: 0,
  loading: true,
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

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])

  async function fetchData() {
    const res = await fetch(url)
    const data = await res.json()
    dispatch({ type: 'FETCH_DATA', payload: data })
  }

  useEffect(() => {
    fetchData()
  }, [])

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
