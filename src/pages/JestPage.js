import React, { Component, Fragment } from 'react';
import { Jest, Helmet } from '../components';

class JestPage extends Component {
  render() {
    return (
      <Fragment>
        <Helmet title='Jest Testing with React.js'/>
        <Jest />
      </Fragment>
    )
  }

}

export default JestPage;