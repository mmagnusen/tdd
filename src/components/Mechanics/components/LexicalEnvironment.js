import React, { Fragment } from 'react';
import { Helmet, Link, Gist } from '../../';
import { LINK_TYPE } from '../../../constants';

const LexicalEnvironment = () => (
    <Fragment>
        <Helmet 
            title='Front-end JavaScript Tutorials'
            description='Clearli will help you gain a deeper understanding of JavaScript, from beginning to the more complex concepts. There are a range of guides and resources to help you become confident in ES6 syntax, testing, frameworks and vanilla JavaScript.'
        />
        <div className='SyntaxParser'>
            <section className='container'>
                <section className='white-content'>
                    <h1>What is the lexical environment?</h1>
                    <p>Lexical: "Relating to the words or vocabulary of a language" - <Link type={LINK_TYPE.EXTERNAL} to='https://www.lexico.com/en/definition/lexical'>Oxford English Dictionary</Link></p>
                    <p>In programming, this means where a chunk of code physically sits will affect how it is interpreted and executed. In plain terms, a lexical environment is where the code appears and what surrounds it.</p>
                </section>
                <section className='white-content'>
                    <p>Each time you create a new function, this creates another lexical environment:</p>
                    <Gist id='c728df8de1153dec9ad76d6dd2a2b878'/>
                    <p>This means there are can be potentially dozens or hundreds of lexical environments within one file.</p>
                </section>
            </section>
        </div>
    </Fragment>
);

export default LexicalEnvironment;