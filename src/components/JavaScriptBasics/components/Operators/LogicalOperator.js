import React, { Fragment } from 'react';
import { CodeBlock, Helmet } from '../../../../components/';
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
            <CodeBlock>
            {
`
var legsOnAnimalOne = '2';

var legsOnAnimalTwo = 2;

var areEitherValuesAString = (typeof legsOnAnimalOne === 'string' || typeof legsOnAnimalTwo === 'string');

console.log('are either values a string?', areEitherValuesAString);
`
        }
        </CodeBlock>
            <img src={LogicalOr} alt='logical or operator'/>
        </section>

    <section className='white-content'>
        <h4>Logical AND</h4>
        <p>The <span className='variable'>logical and</span> operator is represented by two ampersand symbols <span className='variable'>&&</span> </p>
        <p>It will return true only if both expression evaluate to true. If either the first expression or the second expression evaluates to false, the whole expression will evaluate to false.</p>
        <CodeBlock>
        {
`
var legsOnAnimalOne = '2';

var legsOnAnimalTwo = 2;

var areBothValuesAString = (typeof legsOnAnimalOne === 'string' && typeof legsOnAnimalTwo === 'string');

console.log('are both values a string?', areBothValuesAString);
`
    }
    </CodeBlock>
        <img src={LogicalAnd} alt='logical and operator'/>
    </section>
    </Fragment>
);

export default LogicalOperator;