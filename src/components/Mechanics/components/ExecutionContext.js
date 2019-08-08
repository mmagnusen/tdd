import React, { Fragment } from 'react';
import { Helmet, Link, Gist } from '../../';
import { LINK_TYPE } from '../../../constants';

const ExecutionContext = () => (
    <Fragment>
        <Helmet 
            title='Front-end JavaScript Tutorials'
            description='Clearli will help you gain a deeper understanding of JavaScript, from beginning to the more complex concepts. There are a range of guides and resources to help you become confident in ES6 syntax, testing, frameworks and vanilla JavaScript.'
        />
        <div className='SyntaxParser'>
            <section className='container'>
                <section className='white-content'>
                    <h1>What is the Execution Context?</h1>
                    <p>We already know there can be multple lexical environments. The current lexical environment is determined by execution contexts.</p>
                    <p>Execution contexts </p>
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
            </section>
        </div>
    </Fragment>
);

export default ExecutionContext;