import React, { Component, Fragment } from 'react';
import { Selenium, Helmet } from '../components'

class SeleniumPage extends Component {
  render() {
    return (
      <Fragment>
        <Helmet title='Selenium Testing with React.js'/>
        <Selenium />
      </Fragment>
    )
  }
}

export default SeleniumPage;