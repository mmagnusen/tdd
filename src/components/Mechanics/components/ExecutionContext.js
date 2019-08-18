import React, { Fragment } from 'react';
import { CodeBlock, Command, Helmet, Link } from '../../';
import { ThisGlobal, NameGlobal, ReturnNameGlobal, HoistedGreetingOne, HoistingReferenceError, ExecutionStackOne, ExecutionStackTwo } from '../../../assets/';
import { LINK_TYPE } from '../../../constants/';

const ExecutionContext = () => (
    <Fragment>
        <Helmet 
            title='JavaScript Execution Context'
            description='What is an execution context and how does it affect how your code is run?'
        />
        <section className='white-content'>
            <h1>What is the Execution Context?</h1>
            <p>The execution context is the wrapper around your currently running code.</p>
            <p>We already know there can be multple lexical environments. The current lexical environment which is running is determined by the execution context.</p>
            <p>There are two types of execution contexts:</p>
            <ul>  
                <li>Global execution context</li>
                <li>Function execution context</li>
            </ul>

            <h4>Phases of the Execution Context</h4>
            <p>It is important to note there are two phases of any <span>execution context</span></p>
            <ul>
                <li>creation phase</li>
                <li>execution phase</li>
            </ul>
        </section>
        <section className='white-content'>
            <h1>Global execution context</h1>
            <p>This is the base execution context, and is created before any code is executed.</p>
            <p>It is created by the JavaScript engine.</p>
            <h4>Creation stage of global execution context</h4>
            <p>We get some cool things happening at the creation stage of the global execution object, we will cover each of these in turn:</p>
            <ul>
                <li>Global object</li>
                <li>this</li>
                <li>hoisting</li>
                <li>all variables are given a value called <span>undefined</span></li>
            </ul>
 
            <h4>The global object:</h4>
        
            <p>You can access the global object by using the <span className='variable'>this</span> keyword.</p>
            <h4>In the browser</h4>
            <p>Within a web browser, the <span className='variable'> global object</span> is the <span className='variable'>window object</span></p>
            <p>Each new tab opened in the browser creates its own global execution context.</p>
            <p>If we type in <span className='variable'> this</span> in the browser console, we will be shown the global object:</p>
            <Command>
                this
            </Command>
            <p>We see the <span className='variable'>global object</span> is the <span className='variable'>window object</span>, with different key:value pairs. Each of these keys and values are available globally, which means they are accessible from within any function we create.</p>

            <img src={ThisGlobal} alt='this object in window'/>

            <h4>Definition of Global</h4>
            <p>Global in JavaScript, means something which is not inside a function.</p>
            <p>When you create a variable in JavaScript and it's not inside a function, it becomes a <span className='variable'>global</span> variable.</p>
            <CodeBlock>
            {
`
var name = "Marilyn";
function namedGreeting() {

}
`
        }
        </CodeBlock>
            <p>If we run this from a web browser, we see that our two variables <span className='variable'>name</span> and <span className='variable'>namedGreeting</span> have been attached to the global object (the window object).</p>
            <img src={NameGlobal} alt='this object in window'/>
            
            <p>We can type 'name' or 'this.name' to access that global variable</p>
            <img src={ReturnNameGlobal} alt='return name from window console'/>

            <h4>Hoisting</h4>
            <p>Hoisting is a feature provided by the global execution context at the creation stage.</p>
            <p>Normally when code runs, it runs from top to bottom, left to right.</p>
            <p>Taking a look at this code, what would we expect to see when it is run?</p>
            <CodeBlock>
            {
`
var name = "Marilyn";
function namedGreeting() {
    console.log('namedGreeting called')
}

console.log(name)
namedGreeting();
`
        }
        </CodeBlock>
            <p>As expected, we see <span className='variable'>name</span> logged first, then our function log</p>
            <img src={HoistedGreetingOne} alt='hoisted variables' />

            <p>What happens if we switch these around so we invoke our function and log our variable before they are declared?</p>
            <CodeBlock>
            {
`
console.log(name)
namedGreeting();

var name = "Marilyn";
function namedGreeting() {
    console.log('namedGreeting called')
}
`
        }
        </CodeBlock>
            <p>Interestingly, this doesn't throw an error:</p>
            <img src={HoistedGreetingOne} alt='hoisted variables' />

            <p>Hoisting is the process whereby variable declarations are hoisted to the top of the file, meaning it can be accessed at any point in the code.</p>
         
            <p><span className='variable'>namedGreeting()</span> is being called before it is declared. This works because the <span className='variable'>namedGreeting()</span> function has been hoisted to the top, and so is available from the first line of the script.</p>
            <p>Important: only function declarations are hoisted, not function expressions. Our example above works because it is a function declaration. The code below does not work because it is a function expression:</p>
            <CodeBlock>
            {
`

console.log(name)
namedGreeting();

var name = "Marilyn";
const namedGreeting = () => {
    console.log('namedGreeting called')
}
`
        }
        </CodeBlock>
            <p>We receive a reference error:</p>
            <img src={HoistingReferenceError} alt='hoisting reference error' />
            <p>For this reason, it's best not to rely on hoisting. You should always make sure your variables are declared before you try to access them.</p>

            <h4>Undefined</h4>
            <p>Another process during the creation stage is that all variables are allocated a value of undefined. Read more about <Link type={LINK_TYPE.INTERNAL} to='/concepts/javascript/data-types'> JavaScript data types</Link></p>
            
            <h4>Execution Phase </h4>
            <p>The second phase of the execution context is <span className='variable'>code execution</span>.</p>
            <p>This is where the JavaScript engine goes through your code line by line and executes each line.</p>
           

        </section>
        <section className='white-content'>
            <h1>Function execution context</h1>

            <p>There are two parts to any function:</p>
            <ul>
                <li>Creating the function</li>
                <li>Invoking the function</li>
            </ul>

            <h4>Function invocation</h4>
            <p>Function invocation means to call a function. This is also known as executing a funtion.</p>
            <p>We call a function by typing out the name of the function, followed immediately by a set of paranthesis eg <span className='variable'>myFunction()</span></p>
        
            <CodeBlock>
            {
`
const hello = () => {
    console.log('hello');
  }
  
  hello();
`
        }
        </CodeBlock>
            <p>We create the function on line 1</p>
            <p>We call the function on line 5</p>
                    
            <h4>The function execution stack</h4>
            <p>A new function execution context is created each time a function is called.</p>
            <p>What would you expect to see logged to the console here?</p>
            <CodeBlock>
            {
`

const a = () => {
    console.log('a')
}

const b = () => {
    console.log('b')
}

const c = () => {
    console.log('c')
}

a()
b()
c()
`
        }
        </CodeBlock>
            <p>answer:</p>
            <img src={ExecutionStackOne} alt='execution stack logged to console'/>

            <p>Let's switch up the order of the calls</p>
            <CodeBlock>
            {
`

const a = () => {   
    b()
    console.log('a')
}

const b = () => {
    console.log('b')
}

const c = () => {
    a()
    console.log('c')
}

c()
`
        }
        </CodeBlock>
            <p>Can you guess what will be printed to the console?</p>
            <p>answer:</p>
            <img src={ExecutionStackTwo} alt='execution stack logged to console'/>
        </section>
    </Fragment>
);

export default ExecutionContext;