import React, { Fragment } from 'react';
import { Concepts, Helmet } from '../components'

const ConceptsPage = () => (
  <Fragment>
    <Helmet title='Understanding JavaScript Concepts || Clearli.io'/>
    <Concepts />
  </Fragment>
);

export default ConceptsPage;