export const TEXT_CHANGE = 'TEXT_CHANGE'
export const ADD_COMMENT = 'ADD_COMMENT'

export const textChange = (name, value) => {
  console.log('test:', name, value)
  return {
    type: TEXT_CHANGE,
    [name]: value
  }
}

export const addComment = comment => {
  return {
    type: ADD_COMMENT,
    comment: comment
  }
}
