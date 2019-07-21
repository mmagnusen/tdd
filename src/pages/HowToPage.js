import React, { Component, Fragment } from 'react';
import { HowTo, Helmet } from '../components'

class HowToPage extends Component {
  render() {
    return (
      <Fragment>
          <Helmet title='Front-end How-to Tutorials || Clearli.io'/>
          <HowTo />
      </Fragment>
    )
  }

}

export default HowToPage;