import React, { Component } from 'react';
import { Command, CodeBlock, Link } from '../../components/';
import { LINK_TYPE } from '../../constants/';
import calculate from '../../resources/calculate.png';
import './Jest.scss';

class Jest extends Component {
    render() {
        return (
            <div className='Jest'>
                <div className='container'>  
                    <h1>Jest</h1>
                    <section className='white-content'>
                        <h1>What is Jest?</h1>
                        <p><Link to='https://jestjs.io/' type={LINK_TYPE.EXTERNAL}>Jest</Link> is a test runner. This means that it runs the tests you have written and tells you if the code passes or fails those tests.</p>
                        <p>It's created by the team at <Link to='https://www.facebook.com/' type={LINK_TYPE.EXTERNAL}>Facebook</Link> </p>
                        <p>It comes pre-installed in every <Link to='https://www.npmjs.com/package/create-react-app' type={LINK_TYPE.EXTERNAL}>create-react-app</Link> application</p>
                        <p>Works with many front-end frameworks including <Link to='https://reactjs.org/' type={LINK_TYPE.EXTERNAL}>React</Link>, <Link to='https://vuejs.org/' type={LINK_TYPE.EXTERNAL}>Vue</Link> and many more</p>
                    </section>

                    <section className='white-content'>
                        <h1>Why is it useful?</h1>
                        <p>Provides an overview of your code coverage - this means you know how much of your code is covered by tests. Generally, the higher this number, the better.</p>
                    </section>

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
                        <p><span className='variable'>expect()</span> will always be used with a matcher, which lets you validate what the value should be. We are saying we expect the value <span className='variable'>area</span> to be 4.</p>
                    </section>

                    <section className='white-content'>
                    <h1>Running our test</h1>
                    <p>Navigate to the root of your project</p>
                    <Command>npm run test</Command>
                    <ul>
                        <li>runs tests in 'watch mode' - this means any changes made to components will re-run tests associated with them</li>
                        <li>can find any file with a `.test.js` or `.spec.js` suffix</li>
                        <li>jest can find any `.js` file within a `__tests__` folder</li>
                    </ul>
                    <img src={calculate}/>
                </section>

                </div>
            </div>
        )
    }
}

export default Jest;