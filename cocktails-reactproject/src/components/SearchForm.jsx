import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setName } = useGlobalContext()

  const searchValue = useRef(null)
  function handleChange() {
    setName(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(searchValue.current.value)
  }

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            // name='name'
            id='name'
            ref={searchValue}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
