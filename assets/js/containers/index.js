import React from 'react'
import { connect } from 'react-redux'

/** Main */
class App extends React.Component {
  /**
   * @return {Object} jsx
   */
  render() {
    return <p>Hello, React</p>
  }
}

const mapStateToProps = state => {}

export default connect(mapStateToProps)(App)
