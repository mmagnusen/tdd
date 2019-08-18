import React, { Fragment } from 'react';
import { CodeBlock, Link, Helmet } from '../../../components';
import { UndefinedLocalScope } from '../../../assets';
import { LINK_TYPE } from '../../../constants/'

const Scope = () => (
    <Fragment>
        <Helmet 
            title='JavaScript Scope'
            description='What is Scope in JavaScript? What are the different types of scope and how does it affect how code is executed?'
        />
        <section className='white-content'>
            <h1>What is scope?</h1>
            <p>Scope determines how and from where a variable can be accessed. Whether or not you can access a variable depends on:</p>

            <ul>
                <li>Where the variable was created</li>
                <li>Where you are when you try to access that variable</li>
            </ul>

            <p>There are only two types of <span className='variable'>scope</span> in JavaScript:</p>
            <ul>
                <li>Global scope</li>
                <li>Local scope</li>
            </ul>
        </section>

        <section className='white-content'>
            <h1>Local Scope</h1>
            <p>Each function creates its own scope. We call this <span className='variable'>function scope</span>.</p>
            <p>Variables which are created inside a function cannot be accessed outside the function.</p>
            <CodeBlock>
                {
                    `
                        const calculateArea = () => {
                            const length = 100;
                            const width = 50;

                            console.log(length, width);
                        }

                        calculateArea();

                        //100 50
                    `
                }
            </CodeBlock>
            <p>The variables <span className='variable'>length</span> and <span className='variable'>width</span> can be accessed within the <span className='variable'>calculateArea</span> function because the variables and the console.log statement are within the same scope. They are both inside the function.</p>
            
            <p>If we try to access those same length and width variables, we receive an error telling us they are not defined. This is because length and width can only be accessed within the scope they were created (the function).</p>
            <CodeBlock>
                {
                    `
                    const calculateArea = () => {
                        const length = 100;
                        const width = 50;
                    }

                    console.log(length, width);

                    //100 50
                    `
                }
            </CodeBlock>
            <img src={UndefinedLocalScope} alt='inherited class error'/>
            <p>Variables created within a function can only be accessed from within that function.</p>
        </section>

        <section className='white-content'>
            <h1>Global Scope</h1>
            <p>Global scope is the space outside a function. A variable defined outside a function is available globally, meaning it is available anywhere.</p>
            <CodeBlock>
                {
                    `
                        const length = 100;
                        const width = 50;

                        const calculateArea = () => {
                            console.log(length, width);
                        }

                        calculateArea();

                        console.log(length, width);
                        // 100 50
                        // 100 50
                    `
                }
            </CodeBlock>
            <p>In this instance, <span className='variable'>length</span> and <span className='variable'>width</span> were created outside a function, which means they can be accessed globally.</p>
            <p>They can be accessed from the global scope, which is within or outside a function.</p>

            <p>You should be careful when creating variables.</p>
            <p>Variables created inside a function will automatically become global if it is not created using <span className='variable'>let</span>, <span className='variable'>const</span>, or <span className='variable'>var</span>.</p>
            
            <h4>Using 'strict' mode</h4>
            <p>Strict mode will stop undeclared variables created inside a function from being automatically global.</p>
        </section>

        <section className='white-content'>
            <h1>Variable life-span</h1>
            <p>Global variables: they exist as long as your application exists. That means if created within a script, they exist as long as the script is running. If accessed by a web page, they exist as long as that window is open.</p>
            <p>Local variables: they are created when the function is called, and deleted after.</p>
        </section>

        <section className='white-content'>
            <h1>Closures</h1>
            <p>A definition taken from <Link type={LINK_TYPE.EXTERNAL} to='https://www.manning.com/books/secrets-of-the-javascript-ninja-second-edition'>'Secrets of the JavaScript Ninja'</Link>: A closure is a way to access and manipulate external variables from within a function.</p>
            <p>Consider this function. What would you expect age to be?</p>
            <CodeBlock>
                {
                    `
                    let age = 10;

                    const birthday = () => {
                        age++;
                    }

                    birthday();
                    birthday();
                    birthday();

                    console.log(age);
                    //13
                    `
                }
            </CodeBlock>
            <p>The value of age is 13.</p>
            <p>The problem here is that any function can alter the age value. Because age is declared globally, its value also changes each time the birthday function is called.</p>

            <p>By creating a closure, we ensure that:</p>
            <ul>
                <li><span>age</span> can only be accessed within the <span className='variable'>birthday</span> function</li>
                <li>The value of age is reset each time the  <span className='variable'>birthday</span> function is called</li>
            </ul>
            <CodeBlock>
                {
                    `
                        const birthday  = () => {
                            let age = 10;
                        
                            const setCandles = () => {
                                age++
                                console.log('You will get ${'age'} candles');
                            }
                        
                            setCandles()
                        }
                        
                        birthday();
                        birthday();
                        birthday();
                        
                        //You will get 11 candles
                        //You will get 11 candles
                        //You will get 11 candles
                    `
                }
            </CodeBlock>
        </section>
    </Fragment>
);

export default Scope;
