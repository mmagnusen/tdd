import React, { Fragment } from 'react';
import { Helmet, Link, Gist } from '../../';
import { LINK_TYPE } from '../../../constants';

const ExecutionContext = () => (
    <Fragment>
        <Helmet 
            title='Front-end JavaScript Tutorials'
            description='Clearli will help you gain a deeper understanding of JavaScript, from beginning to the more complex concepts. There are a range of guides and resources to help you become confident in ES6 syntax, testing, frameworks and vanilla JavaScript.'
        />
        <div className='SyntaxParser'>
            <section className='container'>
                <section className='white-content'>
                    <h1>What is the Execution Context?</h1>
                    <p>Lexical: "Relating to the words or vocabulary of a language" - <Link type={LINK_TYPE.EXTERNAL} to='https://www.lexico.com/en/definition/lexical'>Oxford English Dictionary</Link></p>
                    <p>In programming, this means wh</p>
                </section>
                <section className='white-content'>
                </section>
                <section className='white-content'>
                    <h1>Further reading</h1>
                    <p><Link type={LINK_TYPE.EXTERNAL} to='https://medium.com/@easyexpresssoft/javascript-syntax-parser-4b7f3f320ebe'>Javascript Syntax Parser</Link></p>
                </section>
                
            </section>
        </div>
    </Fragment>
);

export default ExecutionContext;