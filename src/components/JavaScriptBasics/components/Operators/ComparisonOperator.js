import React, { Fragment } from 'react';
import { Gist } from '../../../../components/';

const ComparisonOperator = () => (
    <Fragment>
        <section className='white-content'>
            <h4>Comparison Operators</h4>
            <p>Comparison operators help us to compare one value against another.</p>
        </section>

        <section className='white-content'>
            <h4>Equal</h4>
            <p>The <span className='variable'>equality</span> operator helps us test if two values are roughly equal.</p>
         </section>

        <section className='white-content'>
            <h4>Stricly equal</h4>
        </section>

        <section className='white-content'>
            <h4>Not equal</h4>
        </section>

        <section className='white-content'>
            <h4>Stricly not equal</h4>
        </section>
    </Fragment>
);

export default ComparisonOperator;