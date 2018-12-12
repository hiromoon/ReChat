import { TEXT_CHANGE, /* ADD_COMMENT,*/ RECIEVE_COMMENT } from '../actions'

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
    case RECIEVE_COMMENT:
      console.log(action.comment)
      return {
        ...state,
        comments: state.comments.concat([action.comment]),
        text: ''
      }
    default:
      return state
  }
}
