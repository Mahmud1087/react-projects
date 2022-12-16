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
  todoListCopy: [],
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
  function allActiveCompleted(buttons) {
    dispatch({ type: 'ACTIVE_TASK', payload: buttons })
  }

  function handleOnDragEnd(result) {
    const lists = Array.from(state.todoList)
    const [reorderdList] = lists.splice(result.source.index, -1)
    lists.splice(result.destination.index, 0, reorderdList)
    dispatch({ type: 'dragNdrop', payload: lists })
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
        handleOnDragEnd={handleOnDragEnd}
      />
      <FooterButtons allActiveCompleted={allActiveCompleted} />
      {state.todoList.length > 0 && (
        <Footer>Drag and drop to reorder list</Footer>
      )}
    </>
  )
}
