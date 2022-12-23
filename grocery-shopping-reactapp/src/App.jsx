import React, { useState, useEffect } from 'react'
import List from './components/List'
import Alert from './components/Alert'

function getLocalStorage() {
  const item = localStorage.getItem('list')
  if (item) {
    return JSON.parse(item)
  }
  return []
}

function App() {
  const [groceries, setGroceries] = useState(getLocalStorage())
  const [inputItem, setInputItem] = useState('')
  const [editID, setEditID] = useState(null)
  const [alertMessage, setAlertMessage] = useState({
    show: false,
    msg: '',
    cls: '',
  })
  const [edit, setEdit] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!inputItem) {
      setAlertMessage({ show: true, msg: 'please enter value', cls: 'danger' })
    } else if (inputItem && edit) {
      setGroceries(
        groceries.map((list) => {
          if (list.id === editID) {
            return { ...list, groceryItem: inputItem }
          }
          return list
        })
      )
      setEdit(false)
      setInputItem('')
      setEditID(null)
      setAlertMessage({
        show: true,
        msg: 'value changed',
        cls: 'success',
      })
    } else {
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
      setInputItem('')
      setEdit(false)
      setEditID(null)
    }
  }

  function handleDelete(id) {
    setGroceries((prevList) => prevList.filter((list) => list.id !== id))
    setAlertMessage({ show: true, msg: 'item removed', cls: 'danger' })
  }

  function handleEdit(id) {
    const specificItem = groceries.find((item) => item.id === id)
    setEdit(true)
    setInputItem(specificItem.groceryItem)
    setEditID(id)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(groceries))
  })

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
            {edit ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      <div className='grocery-container'>
        {groceries.map((grocery) => {
          return (
            <List
              key={grocery.id}
              {...grocery}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          )
        })}
      </div>
    </section>
  )
}

export default App
