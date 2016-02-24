import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import routeSelector from '../redux/routes'

import Router from './Router'
import Footer from './Footer'

class App extends Component {
  render() {
    const { route } = this.state
    return (
      <div className="container">
        <Router route={route} />
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
}

export default connect(routeSelector)(App)
