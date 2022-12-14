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

export default function TodoList({
  todoList,
  removeItem,
  completed,
  clearCompleted,
}) {
  return (
    <Todos>
      {todoList.map((todo) => {
        return (
          <TodoItems key={todo.id}>
            <CheckItem>
              {todo.isCompleted ? (
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
              {todo.isCompleted ? (
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
          <ClearCompleted onClick={() => clearCompleted(true)}>
            Clear Completed
          </ClearCompleted>
        )}
      </TodoItemsFooter>
    </Todos>
  )
}
