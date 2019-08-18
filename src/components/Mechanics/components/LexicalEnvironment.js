import React, { Fragment } from 'react';
import { CodeBlock, Helmet, Link } from '../../';
import { LINK_TYPE } from '../../../constants';

const LexicalEnvironment = () => (
    <Fragment>
        <Helmet 
            title='JavaScript Lexical Environment'
            description='What is a lexical environment and how does it affect how your code is run?.'
        />
        <section className='white-content'>
            <h1>What is the lexical environment?</h1>
            <p>Lexical: "Relating to the words or vocabulary of a language" - <Link type={LINK_TYPE.EXTERNAL} to='https://www.lexico.com/en/definition/lexical'>Oxford English Dictionary</Link></p>
            <p>In programming, this means where a chunk of code physically sits will affect how it is interpreted and executed. In plain terms, a lexical environment is where the code appears and what surrounds it.</p>
        </section>
        <section className='white-content'>
            <p>Each time you create a new function, this creates another lexical environment:</p>
            <CodeBlock>
            {
`
const outer = () => {
    //there is a lexical environment here
   const inner = () => {
     //there is a new lexical environment here
   }
 }
 
 // code on line 2 will be interpreted differently to code on line 4 because they are in different lexical environments
`
        }
        </CodeBlock>
            <p>This means there are can be potentially dozens or hundreds of lexical environments within one file.</p>
        </section>
    </Fragment>
);

export default LexicalEnvironment;