import React, { Fragment } from 'react';
import { Helmet } from '../../../components';

const Synchronous = () => (
    <Fragment>
        <Helmet 
            title='Synchronous JavaScript'
            description='Understand what is meant by synchronous and why JavaScript is a synchronous, single-thread language.'
        />
        <section className='white-content'>
            <h1>Synchronous</h1>
            <p>Synchronous means "one at a time" and "in order". JavaScript is synchronous because the engine will wait for one thing to finish before the next begins.</p>

        </section>
        <section className='white-content'>
            <h1>Threads</h1>
            <p>In programming, a thread is how many commands are being executed at a time. JavaScript is single-threaded, because only one command is executed at a time.</p>
        </section>
    </Fragment>
);

export default Synchronous;
