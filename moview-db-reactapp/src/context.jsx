import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_MOVIE_API_KEY
}`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [defaultMovie, setDefaultMovie] = useState('batman')
  const [movies, setMovies] = useState([])
  const [error, setError] = useState({ show: false, msg: '' })

  async function fetchData() {
    setLoading(true)
    try {
      const response = await fetch(`${API_ENDPOINT}&s=${defaultMovie}`)
      const data = await response.json()
      if (data.Search) {
        setMovies(data.Search)
        setError({ show: false, msg: '' })
      } else {
        setError({ show: true, msg: data.Error })
        setMovies([...movies])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [defaultMovie])

  return (
    <AppContext.Provider
      value={{ defaultMovie, setDefaultMovie, movies, loading, error }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
