import React, { Fragment } from 'react';
import { Home, Helmet } from '../components'

const HomePage = () => (
  <Fragment>
      <Helmet title='Front-end Testing Tutorials'/>
      <Home />
  </Fragment>
);

export default HomePage;