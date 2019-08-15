import React, { Fragment } from 'react';
import { Gist } from '../../../../components/';

const MathsOperator = () => (
    <Fragment>
        <section className='white-content'>
            <h4>Maths operator</h4>
            <p>Maths operators allow us to make calculations on numbers (and in some cases, strings).</p>
        </section>
        <section className='white-content'>
            <h4>Addition operator</h4>
            <p>Adds two or more numbers together</p>
            <Gist id='dd219128ea158200bd78d7c2f3bc0cb9' />
        </section>
        <section className='white-content'>
            <h4>Subtract operator</h4>
            <p>Subtracts the second value from the first value</p>
            <Gist id='896d112a2d7c8d2c709ed77dec8fbca4' />
        </section>
        <section className='white-content'>
            <h4>Multiply operator</h4>
            <p>Multplies two values</p>
            <Gist id='7f545e0a43d7fe2fc39d42511c40f4ee' />
        </section>
        <section className='white-content'>
            <h4>Divide operator</h4>
            <p>Divides the first value by the second value.</p>
            <Gist id='d96e2ec757635877e2064b2b76d49604' />
        </section>
        <section className='white-content'>
            <h4>Remainder operator</h4>
            <p>Provides the remainder, after the first value is divided by the second value.</p>
            <Gist id='b5b097f9cfe5ef263505038aad90fd60' />
        </section>
    </Fragment>
);

export default MathsOperator;