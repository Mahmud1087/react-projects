import { useRef, useReducer } from 'react'
import { AddButton, BoxItem, CreateItemInput } from './styles/TodoBody.styled'
import { MdAddCircle } from 'react-icons/md'
import TodoList from './TodoList'
import Modal from './Modal'
import { reducer } from './reducer'
import FooterButtons from './FooterButtons'
import { Footer } from './styles/App.styled'

const defaultStates = {
  todoList: [],
  modalContent: '',
  isModalOpen: false,
  // all: [],
  // active: [],
  // completed: [],
}

export default function TodoBody() {
  const todoItem = useRef(null)
  const [state, dispatch] = useReducer(reducer, defaultStates)

  function addItem(e) {
    e.preventDefault()
    const items = {
      id: new Date().getTime().toString(),
      item: todoItem.current.value,
      isCompleted: false,
    }
    if (todoItem.current.value) {
      dispatch({ type: 'ADD_ITEM', payload: items })
    } else {
      dispatch({ type: 'NO_ITEM' })
    }
    todoItem.current.value = ''
  }

  function removeItem(id) {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  function clearCompleted(isCompleted) {
    dispatch({ type: 'CLEAR_COMPLETED', payload: isCompleted })
  }

  function closeModal() {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  function completedTask(id) {
    dispatch({ type: 'COMPLETED_TASK', payload: id })
  }

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
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
      <TodoList
        todoList={state.todoList}
        removeItem={removeItem}
        completedTask={completedTask}
        clearCompleted={clearCompleted}
      />
      {state.todoList.length > 0 && <FooterButtons />}
      {state.todoList.length > 0 && (
        <Footer>Drag and drop to reorder list</Footer>
      )}
    </>
  )
}
