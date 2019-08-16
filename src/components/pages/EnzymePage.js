import React from 'react';
import { Enzyme, GlobalLayout } from '../'

const EnzymePage = (props) => (
  <GlobalLayout>
    <Enzyme {...props} />
  </GlobalLayout>
);

export default EnzymePage;