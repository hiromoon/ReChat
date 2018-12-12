import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AppComponent from '../components'
import { textChange, /* addComment,*/ join, push, leave } from '../actions'

/** Main */
class App extends React.Component {
  /** constructor */
  constructor() {
    super()
    this.onClickHandle = this.onClickHandle.bind(this)
    this.onChangeHandle = this.onChangeHandle.bind(this)
  }

  /**
   * ページ全体のコンポーネントが読み込まれたらWebsocketを接続しに行く
   */
  componentDidMount() {
    const { dispatch } = this.props
    join(dispatch)
  }

  /**
   * コンポーネントがアンマウントされるときにchannleを閉じる
   */
  componentWillUnMount() {
    leave()
  }

  /**
   * onChangeHandle
   * @param {object} event event
   * */
  onChangeHandle(event) {
    const { dispatch } = this.props
    dispatch(textChange('text', event.target.value))
  }
  /**
   * onClickHandle
   */
  onClickHandle() {
    const { /* dispatch,*/ text } = this.props
    push(text)
    // dispatch(addComment(text))
  }
  /**
   * @return {Object} jsx
   */
  render() {
    const { text, comments } = this.props
    return (
      <AppComponent
        text={text}
        comments={comments}
        onClick={this.onClickHandle}
        onChange={this.onChangeHandle}
      />
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  text: PropTypes.string,
  comments: PropTypes.array
}

const mapStateToProps = state => ({
  text: state.Form.text,
  comments: state.Form.comments
})

export default connect(mapStateToProps)(App)
