import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const { defaultMovie, setDefaultMovie, error } = useGlobalContext()

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>search Movies</h2>
      <input
        type='text'
        className='form-input'
        value={defaultMovie}
        onChange={(e) => setDefaultMovie(e.target.value)}
      />
      {error.show && <div className='error'>{error.msg}</div>}
    </form>
  )
}

export default SearchForm
