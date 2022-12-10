export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItem = [...state.todoList, action.payload]
      return {
        ...state,
        todoList: newItem,
        isModalOpen: true,
        modalContent: 'item added',
      }
    case 'NO_ITEM':
      return { ...state, isModalOpen: true, modalContent: 'no item entered' }
    case 'REMOVE_ITEM':
      const newItems = state.todoList.filter(
        (item) => item.id !== action.payload
      )
      return {
        ...state,
        todoList: newItems,
        isModalOpen: true,
        modalContent: 'item removed',
      }
    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false }
    default:
      throw new Error('No matching type')
  }
}
