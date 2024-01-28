import {
  MdCheckCircle,
  MdClose,
  MdEdit,
  MdRadioButtonUnchecked,
} from 'react-icons/md';
import { FaEdit, FaTrash } from 'react-icons/fa';
import {
  CheckItem,
  ClearCompleted,
  Item,
  ItemCompleted,
  ItemsLeft,
  TodoItems,
  TodoItemsFooter,
  Todos,
  EditDeleteIcons,
} from './styles/TodoList.styled';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export default function TodoList({
  todoList,
  removeItem,
  completedTask,
  clearCompleted,
  handleOnDragEnd,
  editList,
}) {
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='droppable-1'>
        {(provided) => (
          <Todos {...provided.droppableProps} ref={provided.innerRef}>
            {todoList.map((todo, index) => {
              return (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(provided) => (
                    <TodoItems
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
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
                      <EditDeleteIcons>
                        <FaEdit
                          className='edit'
                          onClick={() => editList(todo.id, todo.item)}
                        />
                        <FaTrash
                          className='close'
                          onClick={() => removeItem(todo.id)}
                        />
                      </EditDeleteIcons>
                    </TodoItems>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
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
        )}
      </Droppable>
    </DragDropContext>
  );
}
