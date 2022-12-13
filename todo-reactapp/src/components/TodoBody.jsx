import { useRef, useReducer } from 'react'
import { AddButton, BoxItem, CreateItemInput } from './styles/TodoBody.styled'
import { MdAddCircle } from 'react-icons/md'
import TodoList from './TodoList'
import Modal from './Modal'
import { reducer } from './reducer'

const defaultStates = {
  todoList: [],
  modalContent: '',
  isModalOpen: false,
}

export default function TodoBody() {
  const todoItem = useRef(null)
  const [state, dispatch] = useReducer(reducer, defaultStates)

  function addItem() {
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

  function closeModal() {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  function completed(id) {
    dispatch({ type: 'COMPLETED_TASK', payload: id })
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
      <TodoList
        todoList={state.todoList}
        removeItem={removeItem}
        completed={completed}
      />
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
    </>
  )
}
