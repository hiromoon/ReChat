import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import reducer from './reducers'

export default preloadState => {
  return createStore(reducer, preloadState, applyMiddleware(promiseMiddleware))
}
