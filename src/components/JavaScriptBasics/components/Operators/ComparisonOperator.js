import React, { Fragment } from 'react';
import { CodeBlock, Helmet } from '../../../../components/';
import { Ages, EqualAges, StrictlyEqualAges } from '../../../../assets/';

const ComparisonOperator = () => (
    <Fragment>
        <Helmet 
            title='JavaScript comparison operator'
            description='Learn about the comparison operator and how you use it to compare two values.'
        />
        <section className='white-content'>
            <h4>Comparison Operators</h4>
            <p>Comparison operators help us to compare one value against another. It will return <span className='variable'>true</span> if the two values are equal or <span className='variable'>false</span> if they are not equal.</p>
        </section>

        <section className='white-content'>
            <h4>Equal</h4>
            <p>The <span className='variable'>equality</span> operator helps us test if two values are roughly equal.</p>
            <CodeBlock>
                {
                    `
                        var personOneAge = 25;

                        var personTwoAge = '25';

                        console.log('type of personOneAge:', typeof personOneAge);

                        console.log('type of personTwoAge:', typeof personTwoAge);
                    `
                }
            </CodeBlock>

            <p>This is the output to the console:</p>
            <img src={Ages} alt='Ages in console' />

            <p>We can see that <span className='variable'>personOneAge</span> is a number, and <span className='variable'>personTwoAge</span> is a string</p>

            <p>Let us use the equality operator to see if they are equal.</p>
            <CodeBlock>
                {
                    `
                        var personOneAge = 20;
                        var personTwoAge = '25';

                        console.log('is personOneAge equal topersonTwoAge?', personOneAge == personTwoAge);
                    `
                }
            </CodeBlock>
            <p>The output:</p>
            <img src={EqualAges} alt='Ages in console' />
            <p>How are the two values equal even though they are different data types? One is a number and the other is a string.</p>
            <p>This is happenening becaues of <span className='variable'>type inference</span>.</p>
         </section>

        <section className='white-content'>
            <h4>Strict equality</h4>
            <p>Strictly equal checks if two values are of the same type AND of the same value.</p>
            <p>Let us use the strict equality operator to check our two ages again </p>
            <CodeBlock>
                {
                    `
                        var personOneAge = 20;
                        var personTwoAge = '25';

                        console.log('is personOneAge equal to personTwoAge?', personOneAge === personTwoAge);
                    `
                }
            </CodeBlock>
            <img src={StrictlyEqualAges} alt='Ages in console' />
        </section>

        <section className='white-content'>
            <h4>Not equal</h4>
            <p>Not equal <span className='variable'>!=</span> is the opposite of <span className='variable'>==</span></p>
            <p>It returns true if two value are not the same and false if they are, fore example</p>
            <CodeBlock>
            {
                `
                    var legsOnAnimalOne = '2';

                    var legsOnAnimalTwo = 2;

                    console.log(legsOnAnimalOne != legsOnAnimalTwo);
                    // false
                `
            }
        </CodeBlock>
        </section>

        <section className='white-content'>
            <h4>Stricly not equal</h4>
            <CodeBlock>
                {
                    `
                        var legsOnAnimalOne = '2';

                        var legsOnAnimalTwo = 2;

                        console.log(legsOnAnimalOne !== legsOnAnimalTwo);
                        // true
                    `
                }
            </CodeBlock>
        </section>
    </Fragment>
);

export default ComparisonOperator;