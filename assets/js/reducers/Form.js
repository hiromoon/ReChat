import { TEXT_CHANGE, ADD_COMMENT } from '../actions'

const initialState = {
  text: '',
  comments: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case TEXT_CHANGE:
      return {
        ...state,
        text: action.text
      }
    case ADD_COMMENT:
      console.log({ comments: state.comments.concat([action.comment]) })
      return {
        ...state,
        comments: state.comments.concat([action.comment])
      }
    default:
      return state
  }
}
