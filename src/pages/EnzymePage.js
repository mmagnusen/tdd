import React, { Component, Fragment } from 'react';
import { Enzyme, Helmet } from '../components'

class EnzymePage extends Component {
  render() {
    return (
      <Fragment>
        <Helmet title='Enzyme Testing with React.js'/>
        <Enzyme />
      </Fragment>
    )
  }

}

export default EnzymePage;