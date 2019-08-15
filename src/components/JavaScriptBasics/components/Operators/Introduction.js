import React, { Fragment } from 'react';
import { Helmet } from '../../../../components/';

const Introduction = () => (
    <Fragment>
        <Helmet 
            title='JavaScript Operators'
            description='Find out what a JavaScript operators are and how to use them.'
        />
        <section className='white-content'>
            <h4>Operators introduction</h4>
            <p>Definition: An operator is someone or something which has an effect on something else.</p>
            <p>For example:</p>
            <ul>
                <li>A crane operator can lift heavy equipment from point A to point B</li>
                <li>A telephone operator can connect a call from person A to person B</li>
            </ul>
            <p>In programming, an operator is a symbol which performs a mathmatical or logical calculation on two values.</p>
            <p>Operator: The symbol which performs the calculations (the telephone operator)</p>
            <p>Operands: a value which the operator has an effect on (person A and person B, who are being connected)</p>
        </section>
    </Fragment>
);

export default Introduction;