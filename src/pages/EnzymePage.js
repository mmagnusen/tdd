import React, { Fragment } from 'react';
import { Enzyme, Helmet } from '../components'

const EnzymePage = () => (
  <Fragment>
    <Helmet title='Enzyme Testing with React.js'/>
    <Enzyme />
  </Fragment>
);

export default EnzymePage;