import React, { Fragment } from 'react';
import { CodeBlock, Helmet, Link } from '../../../components';
import { LINK_TYPE } from '../../../constants';

const VarLetConst = () => (
    <Fragment>
        <Helmet 
            title='JavaScript Var, Let, Const'
            description='Learn about var, let and const - the three different ways of declaring variables in JavaScript. How is each different and when should you use each one?'
        />
        <section className='white-content'>
            <h1>var, let, const</h1>
            <p><span className='variable'>var</span>, <span className='variable'>let</span> and <span className='variable'>const</span> are the three types of variables in JavaScript.</p>
            <p>There are two concepts important to understand before looking at these three different types of variables.</p>
            <p><span className='variable'>Declaration</span>: when a variable is declared, this is when it is named for the first time.</p>
            <p><span className='variable'>Assignment</span>: this is when that variable is given a value.</p>
            <p>A variable must always be <span className='variable'>declared</span> before a value can be assigned to it. It is common to declare a variable and assign a value to it at the same time, as can be seen on line 3.</p>
            <CodeBlock>
                {
                    `
                        var name; // the variable 'name' is being declared

                        var name = 'Marilyn'; // the variable name is being declared and assigned a value at the same time

                        name = 'Sopihe' // the variable 'name' is being assigned.
                    `
                }
            </CodeBlock>
        </section>

        <section className='white-content'>
            <h1>var</h1>
            <p>Variables created using <span className='variable'>var</span> can be re-declared many times and the value assigned to it can also be changed many times.</p>
            <CodeBlock>
                {
                    `
                        var name = 'Marilyn'; // 'name' is declared for first time

                        console.log(name);
                        //marilyn

                        name = 'Sophie'; //name is re-assigned
                        console.log(name);
                        //Sophie

                        var name = 'Davina'; // name is redeclared and a new value is also assigned to it
                        console.log(name);
                        //Davina
                    `
                }
            </CodeBlock>
        </section>

        <section className='white-content'>
            <h1>let</h1>
            <p><span className='variable'>let</span> means the variable can only be declared once, but you can re-assign it multiple times</p>
            <CodeBlock>
                {
                    `
                        let name = 'Marilyn';

                        console.log(name);
                        //marilyn

                        name = 'Sophie';
                        console.log(name);
                        //Sophie

                        let name = 'Davina';
                        console.log(name);
                        //SyntaxError: Identifier 'name' has already been declared
                    `
                }
            </CodeBlock>
            <p>We can see here that it is possible to give 'name' a new value (re-assigning) but you cannot re-declare it using the <span className='variable'>keyword.</span></p>
        </section>

        <section className='white-content'>
            <h1>const</h1>
            <p><span className='variable'>const</span> means the variable cannot be re-declared and a new value cannot be assigned to it.</p>
            <p>You should use <span className='variable'>const</span> for values you know will never change, like 24 hours in a day or 7 days in a week.</p>
            <CodeBlock>
                {
                    `
                        const name = 'Marilyn';

                        console.log(name);
                        //marilyn

                        name = 'Sophie';
                        console.log(name);
                        //TypeError: Assignment to constant variable.
                    `
                }
            </CodeBlock>
        </section>

        <section className='white-content'>
            <h1>Further reading</h1>
            <p><Link type={LINK_TYPE.EXTERNAL} to='https://medium.com/@js_tut/javascript-tutorial-lexical-environment-3ee161bb2295'>how var, const, let relates to lexical environment</Link></p>
        </section>
    </Fragment>
);

export default VarLetConst;
