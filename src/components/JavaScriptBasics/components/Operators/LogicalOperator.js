import React, { Fragment } from 'react';
import { Gist, Helmet } from '../../../../components/';
import { LogicalOr, LogicalAnd } from '../../../../assets/';

const LogicalOperator = () => (
    <Fragment>
        <Helmet 
            title='JavaScript logical operator'
            description='What is the logical operator and how can you use it to create expressions in your code?'
        />
        <section className='white-content'>
            <h4>Logical Operators</h4>

            <p>Logical operators allow us to add another layer of logic to our code. The compiler will return a <span className='variable'>true</span> or <span className='variable'>false</span> value for logical operators.</p>
        </section>

        <section className='white-content'>
            <h4>Logical OR</h4>
            <p>The <span className='variable'>logical or</span> operator is represented by the symobol <span className='variable'>||</span> </p>
            <p>It will return true if either the first expression or the second expression evaluates to true.</p>
            <Gist id='c6f653c864d736898f9eee4fdeead03b' />
            <img src={LogicalOr} alt='logical or operator'/>
        </section>

    <section className='white-content'>
        <h4>Logical AND</h4>
        <p>The <span className='variable'>logical and</span> operator is represented by two ampersand symbols <span className='variable'>&&</span> </p>
        <p>It will return true only if both expression evaluate to true. If either the first expression or the second expression evaluates to false, the whole expression will evaluate to false.</p>
        <Gist id='46c9209d1cbd81194aa26eb17aad49ff' />
        <img src={LogicalAnd} alt='logical and operator'/>
    </section>
    </Fragment>
);

export default LogicalOperator;