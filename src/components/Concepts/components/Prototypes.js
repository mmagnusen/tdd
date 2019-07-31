import React, { Fragment } from 'react';
import { Gist } from '../../../components';

const Prototypes = () => (
    <Fragment>
        <section className='white-content'>
            <h1>What are prototypes</h1>
            <p>We've already discovered that there are two types of data in JavaScript:</p>
            <ul>
                <li>Primitives</li>
                <li>Objects</li>
            </ul>
        </section>

        <section className='white-content'>
            <h1>Object Prototypes</h1>
            <p>Functions are objects in JavaScript. Objects have a property called prototype.</p>
            <Gist id='f6f21ee77bdaf89c21d96c5e2e5df679' />
            <p>Each time you create a function, it will have a property called <span className='varibale'>prototype</span>.</p>
            <p>This protype is an empty object.</p>
        </section>

        <section className='white-content'>
            <h1>Constructor Functions</h1>
            <p>They should always be capatalised. This is how we differentiate them from regular functions.</p>
            <p>Example of a constructor function:</p>
        </section>

    </Fragment>
);

export default Prototypes;
