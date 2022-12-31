import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true }
    case SET_STORIES:
      return {
        ...state,
        loading: false,
        stories: action.payload.hits,
        totalPage: action.payload.nbPages,
      }
    case REMOVE_STORY:
      const newStories = state.stories.filter(
        (story) => story.objectID !== action.payload
      )
      return { ...state, stories: newStories }
    case HANDLE_SEARCH:
      return { ...state, query: action.payload, page: 0 }
    case HANDLE_PAGE:
      if (action.payload === 'prev') {
        let prevPage = state.page - 1
        if (prevPage < 0) {
          prevPage = state.totalPage - 1
        }
        return { ...state, page: prevPage }
      }
      if (action.payload === 'next') {
        let nextPage = state.page + 1
        if (nextPage > state.totalPage - 1) {
          nextPage = 0
        }
        return { ...state, page: nextPage }
      }
    default:
      throw new Error('No matching action type')
  }
}
export default reducer
