export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItem = [...state.todoList, action.payload]
      const originalItem = newItem
      return {
        ...state,
        todoList: newItem,
        todoListCopy: originalItem,
        isModalOpen: true,
        modalContent: 'task added',
      }

    case 'NO_ITEM':
      return { ...state, isModalOpen: true, modalContent: 'no task entered' }

    case 'REMOVE_ITEM':
      const newItems = state.todoList.filter(
        (item) => item.id !== action.payload
      )
      return {
        ...state,
        todoList: newItems,
        todoListCopy: newItems,
        isModalOpen: true,
        modalContent: 'task removed',
      }

    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false }

    case 'COMPLETED_TASK':
      const completedTask = state.todoList.map((task) =>
        task.id === action.payload
          ? {
              ...task,
              isCompleted: !task.isCompleted,
            }
          : task
      )
      return {
        ...state,
        todoList: completedTask,
        todoListCopy: completedTask,
      }

    case 'CLEAR_COMPLETED':
      const newTasks = state.todoList.filter(
        (task) => task.isCompleted !== action.payload
      )
      return {
        ...state,
        todoList: newTasks,
        todoListCopy: newTasks,
      }

    case 'ACTIVE_TASK':
      const activeTasks = state.todoListCopy.filter((task) => {
        if (action.payload === 'active') {
          return task.isCompleted !== true
        } else if (action.payload === 'completed') {
          return task.isCompleted !== false
        } else {
          return task
        }
      })
      return {
        ...state,
        todoList: activeTasks,
      }

    case 'dragNdrop':
      if (!action.payload.destination) return { ...state }
      const lists = Array.from(state.todoList)
      const [reorderdList] = lists.splice(action.payload.source.index, 1)
      lists.splice(action.payload.destination.index, 0, reorderdList)
      return {
        ...state,
        todoList: lists,
        todoListCopy: lists,
      }
    default:
      throw new Error('No matching type')
  }
}
