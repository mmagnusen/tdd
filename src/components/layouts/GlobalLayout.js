import React, { Fragment } from 'react';
import { Navigation, Footer } from '../'

const GlobalLayout = ({ children }) =>  (
    <Fragment>
        <Navigation />   
            {children}
        <Footer />
        </Fragment>
    )

export default GlobalLayout;