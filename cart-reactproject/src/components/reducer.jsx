const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_ALL':
      return { ...state, cart: [] }

    case 'REMOVE':
      const newList = state.cart.filter((list) => list.id !== action.payload)
      return { ...state, cart: newList }

    case 'INCREASE_DECREASE':
      const newItem = state.cart
        .map((list) => {
          if (list.id === action.payload.id) {
            if (action.payload.incDec === 'inc') {
              return { ...list, amount: list.amount + 1 }
            }
            if (action.payload.incDec === 'dec') {
              return { ...list, amount: list.amount - 1 }
            }
          }
          return list
        })
        .filter((items) => items.amount !== 0)
      return { ...state, cart: newItem }

    default:
      throw new Error('no matching type')
  }
}

export default reducer
