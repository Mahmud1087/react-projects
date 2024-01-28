import { useRef, useReducer, useEffect, useState } from 'react';
import { AddButton, BoxItem, CreateItemInput } from './styles/TodoBody.styled';
import { MdAddCircle } from 'react-icons/md';
import TodoList from './TodoList';
import Modal from './Modal';
import { reducer } from './reducer';
import FooterButtons from './FooterButtons';
import { Footer } from './styles/App.styled';

const saveList = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const defaultData = JSON.parse(localStorage.getItem('list')) || [];

const defaultStates = {
  todoList: defaultData,
  modalContent: '',
  isModalOpen: false,
  todoListCopy: defaultData,
};

export default function TodoBody() {
  const [item, setItem] = useState('');
  const [editId, setEditId] = useState(0);
  const [state, dispatch] = useReducer(reducer, defaultStates);

  useEffect(() => {
    saveList(state.todoList);
    saveList(state.todoListCopy);
  }, [state.todoList, state.todoListCopy]);

  function addItem(e) {
    e.preventDefault();
    const items = {
      id: new Date().getTime().toString(),
      item: item,
      isCompleted: false,
    };
    if (item !== '') {
      dispatch({ type: 'ADD_ITEM', payload: { items, editId, item } });
    } else {
      dispatch({ type: 'NO_ITEM' });
    }
    setItem('');
    setEditId(0);
  }

  function removeItem(id) {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  }

  function clearCompleted(isCompleted) {
    dispatch({ type: 'CLEAR_COMPLETED', payload: isCompleted });
  }

  function closeModal() {
    dispatch({ type: 'CLOSE_MODAL' });
  }

  function completedTask(id) {
    dispatch({ type: 'COMPLETED_TASK', payload: id });
  }

  function allActiveCompleted(buttons) {
    dispatch({ type: 'ACTIVE_TASK', payload: buttons });
  }

  function handleOnDragEnd(result) {
    dispatch({ type: 'dragNdrop', payload: result });
  }

  function editList(id, todoInput) {
    setItem(todoInput);
    setEditId(id);
    // dispatch({ type: 'EDIT_TASK', payload: { id, item } });
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
          value={item}
          onChange={(e) => setItem(e.target.value)}
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
        editList={editList}
      />
      <FooterButtons allActiveCompleted={allActiveCompleted} />
      {state.todoList.length > 0 && (
        <Footer>Drag and drop to reorder list</Footer>
      )}
    </>
  );
}
