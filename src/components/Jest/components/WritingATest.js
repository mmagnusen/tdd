import React, { Fragment } from 'react';
import { Command, CodeBlock, Link } from '../../../components';
import { LINK_TYPE } from '../../../constants';
import { calculate } from '../../../assets';

const WritingATest = () => (
    <Fragment>
        <section className='white-content'>
            <h1>Starting with Jest</h1>

            <p>Writing our first test - you can see the full code here: <Link to='https://github.com/mmagnusen/calculator/blob/master/src/calculator.test.js' type={LINK_TYPE.EXTERNAL}>https://github.com/mmagnusen/calculator</Link></p>
            <p>This is an example of a test:</p>
            <CodeBlock>
    {`
        describe('calculate the area', () => {
        
            const calculateArea = (length, width) => {
                return length * width;
            }
        
            const area = calculateArea(2, 2);
            
            expect(area).toBe(4);
            
        })
    `}
                            
            </CodeBlock>

            <h1>What is happening here?</h1>
            <p><span className='variable'>describe()</span> is a method. It accepts two parameters. The first parameter is a short description of the test. We have written our description as <span className='variable'>calculate the area</span></p>
            <p>The second parameter is a function, which will be called by Jest. Inside this function, we can outline what we want to test to do and say what we expect the result to be.</p>
            <p>First we created a function, called <span className='variable'>calculateArea</span>. It will be passed a length and a width and should return the length * width to calculate the total area.</p>
            <p>We now call that function, passing it a length of 2 and a width of 2. We assign the result of this function call to a constant named <span className='variable'>area</span>.</p>
            <p><span className='variable'>expect()</span> is a function, which should be passed a value. This can be any type of value, in our case it is a number.</p>
            <p><span className='variable'>expect()</span> will always be used with a <Link type={LINK_TYPE.EXTERNAL} to='https://jestjs.io/docs/en/using-matchers'>matcher</Link>, which lets you validate what the value should be. We can say things like we expect the value to be something, to equal something, to be a certain data type etc. We are saying we expect the value <span className='variable'>area</span>to be 4.</p>
        </section>

        <section className='white-content'>
            <h1>Where should we place our tests?</h1>
            <p>Jest can find</p>
            <ul>
                <li>any file with a `.test.js` or `.spec.js` suffix</li>
                <li>any `.js` file within a `__tests__` folder</li>
            </ul>
        </section>

        <section className='white-content'>
            <h1>Running our test</h1>
            <p>Navigate to the root of your project and type in the following command:</p>
            <Command>npm run test</Command>
            <ul>
                <li>This command runs tests in 'watch mode' - this means any changes made to a component will re-run tests associated with that component</li>
                <li>can find any file with a `.test.js` or `.spec.js` suffix</li>
                <li>jest can find any `.js` file within a `__tests__` folder</li>
            </ul>
            <h1>The result of our test</h1>
            <img src={calculate} alt='console screenshot'/>
            <p>Here, Jest is showing us the result of the test we have written.</p>
            <p>We are given information such as whether the test passed or failed, which file the test was in, how many total tests were run and how long the tests took to run.</p>
        </section>
    </Fragment>
);

export default WritingATest;
