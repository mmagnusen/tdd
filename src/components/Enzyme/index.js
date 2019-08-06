import React, { Fragment } from 'react';
import { Helmet } from '../'
import './Enzyme.scss';

const Enzyme = () =>  (
    <Fragment>
        <Helmet 
            title='Enzyme Testing with React.js'
            description='Enzyme is a testing framework created by the team at Air bnb. Learn how it works and how to add it to your JavaScript project.'  
        />
        <div className='Enzyme'>
            <div className='container'>  
                <h1>Enzyme</h1>
            </div>
        </div>
    </Fragment>
);

export default Enzyme;