import React, { Fragment } from 'react';
import { CodeBlock, Helmet, Link } from '../../';
import { LINK_TYPE } from '../../../constants';

const SyntaxParser = () => (
    <Fragment>
        <Helmet 
            title='JavaScript Syntax Parser'
            description='What is a syntax parser and how does it affect how your code is run by the JavaScript engine?'
        />
        <section className='white-content'>
            <h1>What is a syntax parser?</h1>
            <p>"A program that reads your code and determines what it does and if its grammar is valid" - <Link type={LINK_TYPE.EXTERNAL} to='https://anthonyalicea.com/'>Anthony Alicea</Link></p>
            <p>The syntax parser is part of the JavaScript engine, along with the compiler and interpreter. The engine reads your code and determines how the computer will execute that code. You never give instructions to the computer directly, the engine acts as the middleman.</p>
            <p>It's important to know how the parser works so you know how your code will be read.</p>
        </section>
        <section className='white-content'>
            <h1>Return statements</h1>
            <p>One of the cool things about the JavaScript parser is that you don't need to add a semicolon after each expression. If you leave it out, the parser will automatically insert it for you. This has some unintended consequences. Take this code example:</p>
            <CodeBlock>
            {
`
const greeting = () => {
    return
    'Hello';
 }

const printGreeting = greeting();
console.log(printGreeting)
// undefined

const greeting = () => {
    return 'Hello';
}

const printGreeting = greeting();
console.log(printGreeting)
// Hello
`
        }
        </CodeBlock>
            <p>At line 2, the parser will add a semicolon <span className='variable'>;</span> directly after the <span className='variable'>return</span> keyword.</p>
            <p>This means the parser has interpreted the code to read <span className='variable'>return;</span>, which means to return nothing.</p>
            <p>For this reason, you should remember to keep the <span className='variable'>return</span> keyword and the return value on the same line.</p>
        </section>
        <section className='white-content'>
            <h1>Further reading</h1>
            <p><Link type={LINK_TYPE.EXTERNAL} to='https://medium.com/@easyexpresssoft/javascript-syntax-parser-4b7f3f320ebe'>Javascript Syntax Parser</Link></p>
        </section>
    </Fragment>
);

export default SyntaxParser;