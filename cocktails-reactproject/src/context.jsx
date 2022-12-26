import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [name, setName] = useState('a')
  const [cocktail, setCocktail] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchCocktails = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`${url}${name}`)
      const data = await res.json()
      const { drinks } = data
      if (drinks) {
        const newDrinks = drinks.map((drink) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            drink
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setCocktail(newDrinks)
      } else {
        setCocktail([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [name])

  useEffect(() => {
    fetchCocktails()
  }, [name, fetchCocktails])

  return (
    <AppContext.Provider
      value={{
        name,
        loading,
        cocktail,
        setName,
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
