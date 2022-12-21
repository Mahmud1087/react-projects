import React, { useState, useEffect } from 'react'
import List from './components/List'
import Alert from './components/Alert'

function App() {
  const [groceries, setGroceries] = useState([])
  const [inputItem, setInputItem] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (inputItem) {
      const item = {
        id: new Date().getTime().toString(),
        groceryItem: inputItem,
      }
      setGroceries([...groceries, item])
    } else {
      console.log('empty')
    }
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            value={inputItem}
            onChange={(e) => setInputItem(e.target.value)}
            placeholder='e.g eggs'
            className='grocery'
          />
          <button type='submit' className='submit-btn'>
            submit
          </button>
        </div>
        <div className='grocery-container'>
          {groceries.map((grocery) => {
            return <List key={grocery.id} {...grocery} />
          })}
        </div>
      </form>
    </section>
  )
}

export default App
