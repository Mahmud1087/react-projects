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
  completedTask,
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
                  onClick={() => completedTask(todo.id)}
                />
              ) : (
                <MdRadioButtonUnchecked
                  className='unChecked'
                  onClick={() => completedTask(todo.id)}
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
          <ItemsLeft>
            {todoList.length} task{todoList.length > 1 && 's'}
          </ItemsLeft>
        ) : (
          <ItemsLeft>No task</ItemsLeft>
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
