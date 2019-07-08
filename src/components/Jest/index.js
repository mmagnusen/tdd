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
                        <p>Jest is a test runner. This means that it runs the tests you have written and tells you if the code passes or fails those tests.</p>
                        <p>It's created by the team at Facebook</p>
                        <p>Comes pre-installed in every create-react-app application</p>
                        <p>Works with many front-end frameworks including React, Vue and many more</p>
                    </section>

                    <section className='white-content'>
                        <h1>Why is it useful?</h1>
                        <p>Tells you code coverage - this means you know how much of your code is covered by tests. The higher this number, the better.</p>
                    </section>

                    <section className='white-content'>
                        <h1>Starting with Jest</h1>

                        <p>Writing our first test: <Link to='https://github.com/mmagnusen/calculator' type={LINK_TYPE.EXTERNAL}>https://github.com/mmagnusen/calculator</Link></p>
                        <CodeBlock>
{`
    describe('calculateArea', () => {
    
        const calculateArea = (length, width) => {
            return length * width;
        }
    
        const area = calculateArea(2, 2);
        
        expect(area).toBe(4);
        
    })

`}
                           
                        </CodeBlock>

                        <h1>What is happening here?</h1>
                        <p>'describe' is a method. It accepts two parameters. The first parameter is a short description of the test</p>
                        <p>The second parameter is a function, which will be called by Jest. Inside this function, we can outline what we want to test to do and say what we expect the result to be.</p>
                        <p>First we created a function, called calculateArea. It will be passed a length and a width and should return the length * width to calculate the total area.</p>
                        <p>We now call that function, passing it a length of 2 and a width of 2. We assign the result of this function call to a constant named area.</p>
                        <p>`Expect` is a function, which should be passed a value. This can be any type of value, in our case it is a number.</p>
                        <p>`Expect` will always be used with a matcher, which lets you validate what the value should be. We are saying we expect the value (area) to be 4.</p>
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