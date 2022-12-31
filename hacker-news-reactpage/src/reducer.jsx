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
    default:
      throw new Error('No matching action type')
  }
}
export default reducer
