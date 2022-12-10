import { useState, useRef } from 'react'
import { AddButton, BoxItem, CreateItemInput } from './styles/TodoBody.styled'
import { MdAddCircle } from 'react-icons/md'
import TodoList from './TodoList'

export default function TodoBody() {
  const todoItem = useRef(null)

  const [todoList, setTodoList] = useState([])

  function addItem(e) {
    e.preventDefault()
    const items = {
      id: new Date().getTime().toString(),
      item: todoItem.current.value,
      checked: false,
    }
    if (todoItem.current.value) {
      setTodoList((prevList) => {
        return [...prevList, items]
      })
    } else {
      console.log('Please enter an item')
    }
    todoItem.current.value = ''
  }

  function removeItem(id) {
    setTodoList((prevList) => prevList.filter((item) => item.id !== id))
  }

  return (
    <>
      <BoxItem>
        <CreateItemInput
          type='text'
          placeholder='Create a new todo...'
          ref={todoItem}
        />
        <AddButton onClick={addItem} type='submit'>
          <MdAddCircle />
        </AddButton>
      </BoxItem>
      <TodoList todoList={todoList} removeItem={removeItem} />
    </>
  )
}
