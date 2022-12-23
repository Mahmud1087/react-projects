import React, { useState } from 'react'
import SingleColor from './components/SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [isError, setIsError] = useState(false)
  const [colorList, setColorList] = useState(new Values('#f15025').all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const newColors = new Values(color).all(10)
      setColorList(newColors)
      setIsError(false)
    } catch (error) {
      setIsError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            placeholder='#f15025'
            className={`${isError ? 'error' : null}`}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {colorList.map((color, index) => {
          return (
            <SingleColor
              key={index}
              index={index}
              hexColor={color.hex}
              {...color}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
