import React, { Fragment } from 'react';
import { CodeBlock, Helmet, Link } from '../../../components';
import { LINK_TYPE } from '../../../constants' 

const Prototypes = () => (
    <Fragment>
        <Helmet 
            title='JavaScript Prototypes'
            description='What are JavaScript prototypes? What is prototypal inheritance and how does it differ from class inheritance?'
        />
        <section className='white-content'>
            <h1>Prototypes</h1>
            <p>We've already discovered there are two types of data in JavaScript:</p>
            <ul>
                <li>Primitives</li>
                <li>Objects</li>
            </ul>
            <p>You can view a value's prototype by accessing the <span className='variable'>.prototype</span> property</p>
            <p>Let's start by finding out what data types have prototypes</p>
            <CodeBlock>
                {
                    `
                    const name = 'Marilyn';

                    console.log(typeof name);
                    //string

                    console.log(typeof name.prototype);
                    // undefined

                    const age = 21;

                    console.log(typeof age);
                    //number

                    console.log(typeof age.prototype);
                    // undefined

                    const isAlive = true;

                    console.log(typeof isAlive);
                    //boolean

                    console.log(typeof isAlive.prototype);
                    // undefined

                    const nullValue = null;

                    console.log(typeof nullValue);
                    // object

                    console.log(typeof nullValue.prototype);
                    // TypeError: Cannot read property 'prototype' of null

                    const unknown = undefined;

                    console.log(typeof unknown);
                    // undefined

                    console.log(typeof unknown.prototype);
                    // TypeError: Cannot read property 'prototype' of undefined
                    `
                }
            </CodeBlock>
            <p>So far we've found out that primitive data types do not have prototypes.</p>
        </section>

        <section className='white-content'>
            <h1>Object Prototypes</h1>

            <h4>Arrays</h4>
            <CodeBlock>
                {
                    `
                    const shoppingList = ['hummus', 'avocado', 'batteries'];

                    console.log(typeof shoppingList);
                    //object

                    console.log(typeof shoppingList.prototype);
                    `
                }
            </CodeBlock>
            <p>We can see from above that arrays don't have prototypes</p>

            <h4>Plain objects</h4>
            <CodeBlock>
                {
                    `
                        const obectOfMyAffection = {
                            name: 'Anonymous',
                            address: 'Never you mind'
                        }
                        
                        console.log(typeof obectOfMyAffection);
                        //object
                        
                        console.log(typeof obectOfMyAffection.prototype);
                        // undefined
                    `
                }
            </CodeBlock>
            <p>We can see from above that plain objects do not have prototypes</p>

            <h4>Functions</h4>
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
            <p>Function declarations have prototypes but arrow functions do not.</p>

            <h4>Classes</h4>
            <CodeBlock>
                {
                    `
                        class ClassyPerson {
                        }

                        console.log(typeof ClassyPerson);
                        // function

                        console.log(typeof ClassyPerson.prototype);
                        //object

                        const newClassyPerson = new ClassyPerson();

                        console.log(typeof newClassyPerson);
                        // object

                        console.log(typeof newClassyPerson.prototype);
                        //undefined
                    `
                }
            </CodeBlock>

            <ul>
                <li><span className='variable'>classes</span> are functions which create objects. This is confirmed on line 5, we see that <span className='variable'>ClassyPerson</span> is a function. The <span className='variable'>class</span> keyword is syntax sugar for a function declaration.</li>
                <li>Functions inherit from the object prototype. We will cover what this means below.</li>
                <li>Classes return plain objects.</li>
                <li>Plain objects do not have prototypes, hence why the new instance of <span className='variable'>ClassyPerson</span> <span className='variable'>(newClassyPerson)</span> has no prototype.</li>
            </ul>

            <p>What we have learned here is that of the object data type, only function declarations, classes (not instances of a class) have prototypes</p>
        </section>

        <section className='white-content'>
            <h1>Inheritance</h1>
            <p>Inheritance is a way for different object to share the same code. That code can be keys, values or methods.</p>
        </section>

        <section className='white-content'>
            <h1>Constructor Functions</h1>
            <p><span className='variable'>A constructor function</span> is a function which you can call, to create new objects.</p>
            <p>They should always be capatalised. This is how we differentiate them from regular functions.</p>
            <p>Example of a constructor function:</p>
            <CodeBlock>
                {
                    `
                        function Car(make = 'default make', model = 'default model') {
                            this.make = make;
                            this.model = model;
                        }

                        const customCar = new Car('custom make', 'custom model');

                        console.log(customCar.make, customCar.model);
                        // custom make custom model

                        Car.prototype.drive = function() {
                            console.log('vroom!');
                        }

                        console.log(Car.prototype.hasOwnProperty('drive'));
                        // true

                        console.log(customCar.prototype.hasOwnProperty('drive'));
                        //TypeError: Cannot read property 'hasOwnProperty' of undefined

                        console.log(Car.hasOwnProperty('drive'));
                        // false

                        console.log(customCar.hasOwnProperty('drive'));
                        //false


                        Car.prototype.drive();
                        //vroom!

                        customCar.drive();
                        //vroom!

                        /* SETTING A PROTOTYPE*/
                        customCar.__proto__ = Car;
                        console.log(customCar.prototype.hasOwnProperty('drive'));
                        //true
                    `
                }
            </CodeBlock>

            <p>We are seeing prototypal inheritance at play here.</p>
            <p>When a new instance of an object is created, if you try to call a method on that instance, in the following order this will happen:</p>
            <ul>
                <li>It will try to search for the method on the instance itself</li>
                <li>If it is not available on the instance, it will search on the instance's parent's prototype. On line 17, we see that <span className='variable'>drive</span> is not available on the instance.</li>
                <li>A link is created from the parent prototype to the instance, which gives the instance access to all the methods and properties of the parent's prototype. This is why the method call on line 24 works -  <span className='variable'>drive</span> is a reference to customCar's parent's prototype, which <span>customCar</span> has a link to. This is what is meant by prototypal inheritance, it is actually a "delegation", not an inheritance in the real sense.</li>
                <li>If we want to explicitly set an instance's prototype, we can do so with <span className='variable'>.__proto__</span> </li>
            </ul>
        </section>

        <section className='white-content'>
            <h4>Summary:</h4>
            <ul>
                <li>Primitive data types, plain object, arrow functions do not have prototypes</li>
                <li>Of objects, only function declarations and classes (not instances of a class) have prototypes. <span className='variable'>classes</span> are syntax sugar for function declarations.</li>
            </ul>
        </section>

        <section className='white-content'>
            <h1>Further reading</h1>
            <p><Link type={LINK_TYPE.EXTERNAL} to='https://hackernoon.com/understanding-javascript-prototype-and-inheritance-d55a9a23bde2'>https://hackernoon.com/understanding-javascript-prototype-and-inheritance-d55a9a23bde2</Link></p>
        </section>

    </Fragment>
);

export default Prototypes;
