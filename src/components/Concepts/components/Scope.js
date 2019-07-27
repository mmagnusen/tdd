import React, { Fragment } from 'react';
import { Gist, Link } from '../../../components';
import { UndefinedLocalScope } from '../../../assets';
import { LINK_TYPE } from '../../../constants/'

const Scope = () => (
    <Fragment>
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
            <Gist id='5a5cd48ee71378dd9b709e80ffbe0da3' />
            <p>The variables <span className='variable'>length</span> and <span className='variable'>width</span> can be accessed within the <span className='variable'>calculateArea</span> function because the variables and the console.log statement are within the same scope. They are both inside the function.</p>
            
            <p>If we try to access those same length and width variables, we receive an error telling us they are not defined. This is because length and width can only be accessed within the scope they were created (the function).</p>
            <Gist id='82e7daf8813a240280ba2875b59a5a6e' />
            <img src={UndefinedLocalScope} alt='inherited class error'/>
            <p>Variables created within a function can only be accessed from within that function.</p>
        </section>

        <section className='white-content'>
            <h1>Global Scope</h1>
            <p>Global scope is the space outside a function. A variable defined outside a function is available globally, meaning it is available anywhere.</p>
            <Gist id='ce8ef297adf909bbe5b1f67d6cd5509f' />
            <p>In this instance, <span className='variable'>length</span> and <span className='variable'>width</span> were created outside a function, which means they can be accessed globally.</p>
            <p>They can be accessed from the global scope, which is within or outside a function.</p>

            <p>You should be careful when creating variables.</p>
            <p>Variables created inside a function will automatically become global if it is not created using <span className='variable'>let</span>, <span className='variable'>const</span>, or <span className='variable'>var</span>.</p>
            
            <h5>Using 'strict' mode</h5>
            <p>Strict mode will stop undeclared variables created inside a function from being automatically global.</p>
        </section>

        <section className='white-content'>
            <h1>Variable life-span</h1>
            <p>Global variables: they exist as long as your application exists. That means if created within a script, they exist as long as the script is running. If accessed by a web page, they exist as long as that window is open.</p>
            <p>Local variables: they are created when the function is called, and deleted after.</p>
        </section>

        <section className='white-content'>
            <h1>Hoisting</h1>
            <p>Normally when code runs, it runs from top to bottom, left to right.</p>
            <p>Hoisting is the process whereby variable declarations are hoisted to the top, meaning it can be accessed at any time. For example:</p>
            <Gist id='dc704a65525c5cfe7966d519810076e7' />
            <p><span className='variable'>birthday()</span> is being called before it is declared. This works because the <span className='variable'>birthday()</span> function has been hoisted to the top, and so is available from the first line of the script.</p>
            <p>Important: only function declarations are hoisted, not function expressions. Our example above works because it is a function declaration. The code below does not work because it is a function expression:</p>
            <Gist id='819e065edf475397490f610147fdb1b6' />
        </section>

        <section className='white-content'>
            <h1>Closures</h1>
            <p>A definition taken from <Link type={LINK_TYPE.EXTERNAL} to='https://www.manning.com/books/secrets-of-the-javascript-ninja-second-edition'>'Secrets of the JavaScript Ninja'</Link>: A closure is a way to access and manipulate external variables from within a function.</p>
            <p>Consider this function. What would you expect age to be?</p>
            <Gist id='f9f57e323ab6ce79fd4d118473eef1d3' />
            <p>The value of age is 13.</p>
            <p>The problem here is that any function can alter the age value. Because age is declared globally, its value also changes each time the birthday function is called.</p>

            <Gist id='c608ad0ae7574331bcc0f892b5cb37cf' />
        </section>
    </Fragment>
);

export default Scope;
