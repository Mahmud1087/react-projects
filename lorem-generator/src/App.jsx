import React, { useState } from 'react'
import data from './data'
function App() {
  const [paragraphs, setParagraphs] = useState([])
  const [count, setCount] = useState(0)
  const [isEmpty, setIsEmpty] = useState(true)

  function handleGenerate(e) {
    e.preventDefault()
    const number = parseInt(count)
    const randomNumber = Math.floor(Math.random() * 8)
    setIsEmpty(false)
    if (number <= 0) {
      setParagraphs(data.slice(randomNumber, randomNumber + 1))
      return
    }
    setParagraphs(data.slice(0, number))
  }

  function handleReset(e) {
    e.preventDefault()
    setParagraphs([])
    setCount(0)
    setIsEmpty(true)
  }

  return (
    <section className='section-center'>
      <h3>lorem generator</h3>
      <div className='underline'></div>
      <p>Tired of boring lorem? Try this!</p>
      <form className='lorem-form'>
        <label htmlFor='paragraph'>Paragraphs: </label>
        <input
          type='number'
          id='paragraph'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className='btn' onClick={handleGenerate}>
          generate
        </button>
      </form>
      <div>
        {paragraphs.map((paragraph, index) => {
          return (
            <p className='result' key={index}>
              {paragraph}
            </p>
          )
        })}
      </div>
      {!isEmpty && (
        <button className='btn' onClick={handleReset}>
          reset
        </button>
      )}
    </section>
  )
}

export default App
