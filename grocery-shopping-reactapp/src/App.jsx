import React, { useState, useEffect } from 'react'
import List from './components/List'
import Alert from './components/Alert'

function App() {
  const [groceries, setGroceries] = useState([])
  const [inputItem, setInputItem] = useState('')
  const [alertMessage, setAlertMessage] = useState({
    show: false,
    msg: '',
    cls: '',
  })
  const [edit, setEdit] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (inputItem) {
      const item = {
        id: new Date().getTime().toString(),
        groceryItem: inputItem,
      }
      setGroceries([...groceries, item])
      setAlertMessage({
        show: true,
        msg: 'item added to the list',
        cls: 'success',
      })
    } else {
      setAlertMessage({ show: true, msg: 'please enter value', cls: 'danger' })
    }
  }

  function handleDelete(id) {
    setGroceries((prevList) => prevList.filter((list) => list.id !== id))
    setAlertMessage({ show: true, msg: 'item removed', cls: 'danger' })
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alertMessage.show && (
          <Alert
            alertMessage={alertMessage}
            setAlertMessage={setAlertMessage}
          />
        )}
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
            return (
              <List key={grocery.id} {...grocery} handleDelete={handleDelete} />
            )
          })}
        </div>
      </form>
    </section>
  )
}

export default App
