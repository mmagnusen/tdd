import React, { Fragment } from 'react';
import { CodeBlock, Helmet, Link } from '../../../components';
import { LINK_TYPE } from '../../../constants';

const DataTypes = () => (
    <Fragment>
        <Helmet 
            title='JavaScript Data Types'
            description='Learn about the different data types in JavaScript'
        />
        <section className='white-content'>
            <h1>Primitives and Objects</h1>
            <p>There are two types of data in JavaScript:</p>
            <ul>
                <li>Primitives</li>
                <li>Objects</li>
            </ul>
        </section>

        <section className='white-content'>
            <h1>Primitives</h1>

            <h4>String</h4>
            <p>A string must be surrounded by quotes. There are three types of quotes:</p>
            <CodeBlock>
                {
                    `
                        // single quote
                        const firstName = 'Davina';

                        // double quote
                        const middleName = "Holderness";

                        // backticks 
                        const surName = 'Ashton';
                    `
                }
            </CodeBlock>
            <p>Each of the above are valid strings in JavaScript.</p>

            <h4>Number</h4>
            <p>An integer is a whole number.</p>
            <p>A float is a number with a decimal.</p>
            <p>In JavaScript, the type 'number' represents both integers and floats</p>
            <CodeBlock>
                {
                    `
                        const age = 10;
                        console.log(typeof age);
                        // number

                        const height = 5.5;
                        console.log(typeof height);
                        // number
                    `
                }
            </CodeBlock>

            <h4>Boolean</h4>
            <p>A boolean value can only be <span className='variable'>true</span> or <span className='variable'>false</span>.</p>
            <CodeBlock>
                {
                    `
                        const itIsSunnyInEngland = false;
                        console.log(typeof itIsSunnyInEngland);
                        // boolean

                        const hummusIsDelicious = true;
                        console.log(typeof hummusIsDelicious);
                        // boolean
                    `
                }
            </CodeBlock>

            <h4>Null</h4>
            <p><span className='variable'>Null</span> means it is empty or the value is unknown. Strangely, the type of <span className='variable'>null</span> is an <span className='variable'>object</span> in JavaScript.</p>
            <CodeBlock>
                {
                    `
                        const itIsNull = null;

                        console.log(typeof itIsNull);
                        // object
                    `
                }
            </CodeBlock>

            <h4>Undefined</h4>
            <p><span className='variable'>Undefined</span> means the value is not set.</p>
            <p>During the creation phase of the global execution context, all variables initially have an <span className='variable'>undefined</span> value.</p>
            <p>You should avoid assigning <span className='variable'>undefined</span> to variables, but instead use <span className='variable'>null</span>.</p>
            <p>We use <span className='variable'>undefined</span> to check if a variable has been declared and if a value is assigned to it.</p>
            <CodeBlock>
            {
                `
                    console.log(age)
                    // Uncaught ReferenceError: age is not defined
                `
            }
        </CodeBlock>
            <p>We see here that <span className='variable'>undefined</span> means the variable is declared, but a value has not been assigned to it:</p>
            <CodeBlock>
                {
                    `
                        var age; 
                        console.log(age)
                        // undefined
                    `
                }
            </CodeBlock>
            <p>It is only when a value is assigned to it, that it stops being <span className='variable'>undefined</span> :</p>
            <CodeBlock>
                {
                    `
                        var age = 21; 
                        console.log(age)
                        // 21
                    `
                }
            </CodeBlock>
            <h4>Symbol</h4>
            <p>For a detailed explanation:</p>
            <Link type={LINK_TYPE.EXTERNAL} to='https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/'>https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/</Link>
        </section>

        <section className='white-content'>
            <h1>Objects</h1>
            <p><span className='variable'>Objects</span> are a collection of key:value pairs. The key is a string, the value can be anything.</p>
            <CodeBlock>
                {
                    `
                        const owner = {
                            name: 'Toby',
                        }

                        const cat = {
                            color: 'ginger',
                            type: 'Tabby',
                            paws: 4,
                            owner: owner,
                            lives: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                            scratchMe: function() {
                                console.log('ouch!');
                            }
                        }

                        console.log(typeof cat);
                        // object

                        console.log(cat.color);
                        // ginger;

                        console.log(cat.owner);
                        // { name: 'Toby' }

                        console.log(cat.scratchMe);
                        // [Function: scratchMe]

                        // If a function is assigned as the value of an object, you can call it like so:
                        cat.scratchMe();
                        //ouch!
                    `
                }
            </CodeBlock>

            <h4>Arrays are objects within JavaScript</h4>
            <p><span className='variable'>Objects</span> have methods and properties.</p>
            <CodeBlock>
                {
                    `
                        const favouriteFoods = ['Jollof', 'Ravioli', 'Hummus'];

                        console.log(typeof favouriteFoods);
                        // object

                        console.log(favouriteFoods.length);
                        // 3
                    `
                }
            </CodeBlock>
            <p>We know an <span className='variable'>array</span> is an object because it has values such as <span className='variable'>Array.length</span></p>
            <p>They also have methods such as <span className='variable'>Array.forEach()</span>, <span className='variable'>Array.map()</span>, <span className='variable'>Array.reduce()</span>, - these are known as array iteration methods.</p>

            <h4>functions</h4>
            <p>In JavaScript, any data type which isn't a <span className='variable'>primitive</span> is an <span className='variable'>object</span>. This means that functions are also objects.</p>
            <p>How is this possible?</p>
            <CodeBlock>
                {
                    `
                        //function declaration
                        const makeMe  = function () {
                            console.log('make me');
                        }

                        console.log(typeof makeMe);
                        // function

                        console.log(typeof makeMe.prototype);
                        // object

                        //arrow function
                        const dareMe = () => {
                            console.log('dare me');
                        }

                        console.log(typeof dareMe);
                        // function

                        console.log(typeof dareMe.prototype);
                        // undefined
                    `
                }
            </CodeBlock>
            <p>With our simple test above, we can see that the <span className='variable'>prototype</span> of our <span className='variable'>function</span> is actually an <span className='variable'>object</span>.</p>
            <p>We will find out about <span className='variable'>prototypes</span> in the next section. For now, you just need to know that <span className='variable'>functions</span> are<span className='variable'> objects</span>, because functions inherit from the  <span className='variable'>object</span> prototype.</p>
        </section>

    </Fragment>
);

export default DataTypes;
