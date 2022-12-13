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

export default function TodoList({ todoList, removeItem, completed }) {
  return (
    <Todos>
      {todoList.map((todo) => {
        return (
          <TodoItems key={todo.id}>
            <CheckItem>
              {todo.isChecked ? (
                <MdCheckCircle
                  className='checked'
                  onClick={() => completed(todo.id)}
                />
              ) : (
                <MdRadioButtonUnchecked
                  className='unChecked'
                  onClick={() => completed(todo.id)}
                />
              )}
              {todo.isChecked ? (
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
