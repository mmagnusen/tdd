import React, { Fragment } from 'react';
import { Selenium, Helmet } from '../components'

const SeleniumPage = () => (
  <Fragment>
    <Helmet title='Selenium Testing with React.js'/>
    <Selenium />
  </Fragment>
);

export default SeleniumPage;