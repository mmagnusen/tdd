import React, { Fragment } from 'react';
import { Helmet, Link, Gist } from '../../';
import { LINK_TYPE } from '../../../constants';

const SyntaxParser = () => (
    <Fragment>
        <Helmet 
            title='Front-end JavaScript Tutorials'
            description='Clearli will help you gain a deeper understanding of JavaScript, from beginning to the more complex concepts. There are a range of guides and resources to help you become confident in ES6 syntax, testing, frameworks and vanilla JavaScript.'
        />
        <div className='SyntaxParser'>
            <section className='container'>
                <section className='white-content'>
                    <h1>What is a syntax parser?</h1>
                    <p>"A program that reads your code and determines what it does and if its grammar is valid" - <Link type={LINK_TYPE.EXTERNAL} to='https://anthonyalicea.com/'>Anthony Alicea</Link></p>
                    <p>The parser reads your code and determines how the computer will execute that code. You never give instructions to the computer directly, the parser acts as the middleman.</p>
                    <p>It's important to know how the parser works so you know how your code will be read and interpreted.</p>
                </section>
                <section className='white-content'>
                    <h1>Return statements</h1>
                    <p>One of the cool things about the JavaScript parser is that you don't need to add a semicolon after each expression. If you leave it out, the parser will automatically insert it for you. This has some unintended consequences. Take this code example:</p>
                    <Gist id='28721779491a2304ddc300ee5af0059b' />
                    <p>At line 2, the parser will add a semicolon <span className='variable'>;</span> directly after the <span className='variable'>return</span> keyword.</p>
                    <p>This means the parser has interpreted the code to read <span className='variable'>return;</span>, which means to return nothing.</p>
                    <p>For this reason, you should remember to keep the <span className='variable'>return</span> keyword and the return value on the same line.</p>
                </section>
                <section className='white-content'>
                    <h1>Further reading</h1>
                    <p><Link type={LINK_TYPE.EXTERNAL} to='https://medium.com/@easyexpresssoft/javascript-syntax-parser-4b7f3f320ebe'>Javascript Syntax Parser</Link></p>
                </section>
                
            </section>
        </div>
    </Fragment>
);

export default SyntaxParser;