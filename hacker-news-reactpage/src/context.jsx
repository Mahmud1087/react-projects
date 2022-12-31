import React, { useContext, useEffect, useReducer } from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
  stories: [],
  loading: true,
  page: 0,
  totalPage: 0,
  query: 'react',
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  async function fetchStories() {
    dispatch({ type: SET_LOADING })
    const response = await fetch(
      `${API_ENDPOINT}query=${state.query}&page=${state.page}`
    )
    const data = await response.json()
    dispatch({ type: SET_STORIES, payload: data })
  }

  function removeStory(id) {
    dispatch({ type: REMOVE_STORY, payload: id })
  }

  function handleSearch(value) {
    dispatch({ type: HANDLE_SEARCH, payload: value })
  }

  useEffect(() => {
    fetchStories()
  }, [state.query, state.page])

  return (
    <AppContext.Provider value={{ ...state, removeStory, handleSearch }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
