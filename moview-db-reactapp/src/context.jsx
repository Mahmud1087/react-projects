import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?s=batman&apikey=${
  import.meta.env.VITE_MOVIE_API_KEY
}`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  async function fetchData() {
    const response = await fetch(API_ENDPOINT)
    const data = await response.json()
    console.log(data.Search)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
