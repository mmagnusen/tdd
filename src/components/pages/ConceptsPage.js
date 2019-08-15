import React from 'react';
import { Concepts, GlobalLayout } from '../'

const ConceptsPage = (props) => (
  <GlobalLayout>
    <Concepts {...props}/>
  </GlobalLayout>
);

export default ConceptsPage;