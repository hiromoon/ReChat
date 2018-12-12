import { Socket } from 'phoenix'

export const TEXT_CHANGE = 'TEXT_CHANGE'
export const RECIEVE_COMMENT = 'RECIEVE_COMMENT'

const socket = new Socket('/socket', { params: { token: window.userToken } })
socket.connect()
const channel = socket.channel('room:lobby', {})

export const join = dispatch => {
  channel
    .join()
    .receive('ok', resp => {
      console.log('Join successfully', resp)
      subscribe(dispatch)
    })
    .receive('error', resp => {
      console.log('Unable to join', resp)
    })
}

export const subscribe = dispatch => {
  channel.on('new_msg', payload => {
    dispatch({
      type: RECIEVE_COMMENT,
      comment: payload.body
    })
  })
}

export const leave = () => {
  channel.leave()
}

export const push = message => {
  channel.push('new_msg', { body: `[${Date()}] ${message}` })
}

export const textChange = (name, value) => {
  return {
    type: TEXT_CHANGE,
    [name]: value
  }
}
