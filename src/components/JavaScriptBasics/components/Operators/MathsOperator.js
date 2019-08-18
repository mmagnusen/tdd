import React, { Fragment } from 'react';
import { CodeBlock, Helmet } from '../../../../components/';

const MathsOperator = () => (
    <Fragment>
    <Helmet 
        title='JavaScript maths operators'
        description='Learn all about the different types of maths operators and how you can use them to perfom calculations in your code.'
    />
        <section className='white-content'>
            <h4>Maths operator</h4>
            <p>Maths operators allow us to make calculations on numbers (and in some cases, strings).</p>
        </section>
        <section className='white-content'>
            <h4>Addition operator</h4>
            <p>Adds two or more numbers together</p>
            <CodeBlock>
                {
                    `
                        var firstNumber = 6;

                        var secondNumer = 2;

                        console.log(firstNumber + secondNumer);
                        // 8
                    `
                }
            </CodeBlock>
        </section>
        <section className='white-content'>
            <h4>Subtract operator</h4>
            <p>Subtracts the second value from the first value</p>
            <CodeBlock>
            {
                `
                    var firstNumber = 9;

                    var secondNumer = 7;

                    console.log(firstNumber - secondNumer);
                    // 2
                `
            }
        </CodeBlock>
        </section>
        <section className='white-content'>
            <h4>Multiply operator</h4>
            <p>Multplies two values</p>
            <CodeBlock>
                {
                    `
                        var firstNumber = 6;

                        var secondNumer = 6;

                        console.log(firstNumber * secondNumer);
                        // 36
                    `
                }
            </CodeBlock>
        </section>
        <section className='white-content'>
            <h4>Divide operator</h4>
            <p>Divides the first value by the second value.</p>
            <CodeBlock>
                {
                    `
                        var firstNumber = 40;

                        var secondNumer = 5;

                        console.log(firstNumber / secondNumer);
                        // 8
                    `
                }
            </CodeBlock>
        </section>
        <section className='white-content'>
            <h4>Remainder operator</h4>
            <p>Provides the remainder, after the first value is divided by the second value.</p>
            <CodeBlock>
                {
                    `
                        var firstNumber = 9;

                        var secondNumer = 5;

                        console.log(firstNumber % secondNumer);
                        // 5
                    `
                }
            </CodeBlock>
        </section>
    </Fragment>
);

export default MathsOperator;