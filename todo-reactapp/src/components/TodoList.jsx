import { useState } from 'react'
import { MdCheckCircle, MdClose, MdRadioButtonUnchecked } from 'react-icons/md'
import {
  CheckItem,
  ClearCompleted,
  Item,
  ItemCompleted,
  ItemsLeft,
  TodoItems,
  TodoItemsFooter,
  Todos,
} from './styles/TodoList.styled'

export default function TodoList({ todoList, removeItem }) {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <Todos>
      {todoList.map((todo) => {
        return (
          <TodoItems key={todo.id}>
            <CheckItem>
              {isChecked ? (
                <MdCheckCircle
                  className='checked'
                  onClick={() => setIsChecked(!isChecked)}
                />
              ) : (
                <MdRadioButtonUnchecked
                  className='unChecked'
                  onClick={() => setIsChecked(!isChecked)}
                />
              )}
              {isChecked ? (
                <ItemCompleted>{todo.item}</ItemCompleted>
              ) : (
                <Item>{todo.item}</Item>
              )}
            </CheckItem>
            <MdClose className='close' onClick={() => removeItem(todo.id)} />
          </TodoItems>
        )
      })}
      <TodoItemsFooter>
        {todoList.length >= 1 ? (
          <ItemsLeft>{todoList.length} items left</ItemsLeft>
        ) : (
          <ItemsLeft>No items</ItemsLeft>
        )}
        {todoList.length >= 1 && (
          <ClearCompleted>Clear Completed</ClearCompleted>
        )}
      </TodoItemsFooter>
    </Todos>
  )
}
