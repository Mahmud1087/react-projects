export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItem = [...state.todoList, action.payload]
      return {
        ...state,
        todoList: newItem,
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
      }
    case 'CLEAR_COMPLETED':
      const newTasks = state.todoList.filter(
        (task) => task.isCompleted !== action.payload
      )
      return {
        ...state,
        todoList: newTasks,
      }
    default:
      throw new Error('No matching type')
  }
}
