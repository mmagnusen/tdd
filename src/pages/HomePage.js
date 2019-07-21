import React, { Component, Fragment } from 'react';
import { Home, Helmet } from '../components'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
          <Helmet title='Front-end Testing Tutorials'/>
          <Home />
      </Fragment>
    )
  }

}

export default HomePage;