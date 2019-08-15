import React, { Fragment } from 'react';
import { Gist } from '../../../../components/';
import { Ages, EqualAges, StrictlyEqualAges } from '../../../../assets/';

const ComparisonOperator = () => (
    <Fragment>
        <section className='white-content'>
            <h4>Comparison Operators</h4>
            <p>Comparison operators help us to compare one value against another. It will return <span className='variable'>true</span> if the two values are equal or <span className='variable'>false</span> if they are not equal.</p>
        </section>

        <section className='white-content'>
            <h4>Equal</h4>
            <p>The <span className='variable'>equality</span> operator helps us test if two values are roughly equal.</p>
            <Gist id='45ad2b04eb4db1b8ef107493a15507a1' />

            <p>This is the output to the console:</p>
            <img src={Ages} alt='Ages in console' />

            <p>We can see that <span className='variable'>personOneAge</span> is a number, and <span className='variable'>personTwoAge</span> is a string</p>

            <p>Let us use the equality operator to see if they are equal.</p>
            <Gist id='87fd4c900824e6c401d46631785b4c03' />
            <p>The output:</p>
            <img src={EqualAges} alt='Ages in console' />
            <p>How are the two values equal even though they are different data types? One is a number and the other is a string.</p>
            <p>This is happenening becaues of <span className='variable'>type inference</span>.</p>
         </section>

        <section className='white-content'>
            <h4>Strict equality</h4>
            <p>Strictly equal checks if two values are of the same type AND of the same value.</p>
            <p>Let us use the strict equality operator to check our two ages again </p>
            <Gist id='8f13d1539c0fbe46ab379208e6eef32b' />
            <img src={StrictlyEqualAges} alt='Ages in console' />
        </section>

        <section className='white-content'>
            <h4>Not equal</h4>
            <p>Not equal <span className='variable'>!=</span> is the opposite of <span className='variable'>==</span></p>
            <p>It returns true if two value are not the same and false if they are, fore example</p>
            <Gist id='c5fa412d493aca41525da5066fd2602e' />
        </section>

        <section className='white-content'>
            <h4>Stricly not equal</h4>
            <Gist id='91821189b4048847a7f3b6bb5b06c8f2' />
        </section>
    </Fragment>
);

export default ComparisonOperator;