import React, { Fragment } from 'react';
import { Helmet } from '../../';

const ExecutionContext = () => (
    <Fragment>
        <Helmet 
            title='JavaScript Execution Context'
            description='What is an execution context and how does it affect how your code is run?'
        />
        <section className='white-content'>
            <h1>What is the Execution Context?</h1>
            <p>We already know there can be multple lexical environments. The current lexical environment which is running is determined by execution contexts.</p>
            <p>When your code is run by the JavaScript engine, it will be run in an execution context.</p>
            <p>There are two types of execution contexts:</p>
            <ul>  
                <li>Global execution context</li>
                <li>Function execution context</li>
            </ul>
        </section>
        <section className='white-content'>
            <h1>Global execution context</h1>
            <p>This is created before any code is executed.</p>
        </section>
        <section className='white-content'>
            <h1>Function execution context</h1>
            <p>A new function execution context is created each time a function is called.</p>
        </section>
    </Fragment>
);

export default ExecutionContext;