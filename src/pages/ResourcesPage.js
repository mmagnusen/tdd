import React, { Component, Fragment } from 'react';
import { Resources, Helmet } from '../components'

class ResourcesPage extends Component {
  render() {
    return (
      <Fragment>
        <Helmet title='Front-end testing resources || Clearli.io'/>
        <Resources />
      </Fragment>
    )
  }
}

export default ResourcesPage;