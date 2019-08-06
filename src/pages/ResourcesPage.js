import React, { Fragment } from 'react';
import { Resources, Helmet } from '../components'

const ResourcesPage = () => (
  <Fragment>
    <Helmet title='Front-end testing resources'/>
    <Resources />
  </Fragment>
);

export default ResourcesPage;