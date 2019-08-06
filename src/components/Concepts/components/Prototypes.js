import React, { Fragment } from 'react';
import { Gist, Helmet } from '../../../components';

const Prototypes = () => (
    <Fragment>
        <Helmet title='JavaScript Prototypes'/>
        <section className='white-content'>
            <h1>Prototypes</h1>
            <p>We've already discovered there are two types of data in JavaScript:</p>
            <ul>
                <li>Primitives</li>
                <li>Objects</li>
            </ul>
            <p>You can view a value's prototype by accessing the <span className='variable'>.prototype</span> property</p>
            <p>Let's start by finding out what primitives have prototypes</p>
            <Gist id='eec68864323b449911352b506eaa81b6' />
            <p>So far we've established that primitive data types do not have prototypes.</p>
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
            <p>We already know that <span className='variable'>classes</span> are functions which create objects. This is confirmed on line 5, we see that our <span className='variable'>ClassyPerson</span> class is a function.</p>
            <p>We also already know from our previous test that functions inherit from the object prototype. We will cover what this means below.</p>

            <p>We know that classes return plain objects.</p>
            <p>We've established that plain objects do not have prototypes, hence why the new instance of <span className='variable'>ClassyPerson</span> <span className='variable'>(newClassyPerson)</span> has no prototype.</p>
        </section>

        <section className='white-content'>
            <h1>Constructor Functions</h1>
            <p><span className='variable'>A constructor function</span> is a function which you can call, to create new objects.</p>
            <p>They should always be capatalised. This is how we differentiate them from regular functions.</p>
            <p>Example of a constructor function:</p>
            <Gist id='989312fcaf0fd476d29f456a871ee55c' />
        </section>

    </Fragment>
);

export default Prototypes;
