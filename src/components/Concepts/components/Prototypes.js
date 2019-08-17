import React, { Fragment } from 'react';
import { Gist, Helmet, Link } from '../../../components';
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
            <Gist id='eec68864323b449911352b506eaa81b6' />
            <p>So far we've found out that primitive data types do not have prototypes.</p>
        </section>

        <section className='white-content'>
            <h1>Object Prototypes</h1>

            <h4>Arrays</h4>
            <Gist id='6692a14f979f4db7573f386265d3611d' />
            <p>We can see from above that arrays don't have prototypes</p>

            <h4>Plain objects</h4>
            <Gist id='4659076d4cea66e2d25c57bebf9a0925' />
            <p>We can see from above that plain objects do not have prototypes</p>

            <h4>Functions</h4>
            <Gist id='0921889853ed70bb45bc15938d407df0' />
            <p>Function declarations have prototypes but arrow functions do not.</p>

            <h4>Classes</h4>
            <Gist id='7b1e1dcf280cc7596af2a66c03d78fff' />

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
            <Gist id='989312fcaf0fd476d29f456a871ee55c' />

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
