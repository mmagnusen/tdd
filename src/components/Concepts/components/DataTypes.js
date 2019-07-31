import React, { Fragment } from 'react';
import { Gist } from '../../../components';

const DataTypes = () => (
    <Fragment>
        <section className='white-content'>
            <h1>Primitives and Objects</h1>
            <p>There are two types of data in JavaScript:</p>
            <ul>
                <li>Primitives</li>
                <li>Objects</li>
            </ul>
        </section>

        <section className='white-content'>
            <h1>Primitives</h1>
            <h5>String</h5>
            <h5>Number</h5>
            <h5>Boolean</h5>
            <h5>Null</h5>
            <h5>Undefined</h5>
            <h5>Symbol</h5>
        </section>

        <section className='white-content'>
            <h1>Objects</h1>
            <p>Objects are a collection of key:value pairs</p>
        </section>

    </Fragment>
);

export default DataTypes;
