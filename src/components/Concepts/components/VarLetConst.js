import React, { Fragment } from 'react';
import { Gist, Helmet } from '../../../components';

const VarLetConst = () => (
    <Fragment>
        <Helmet title='What is a Class: JavaScript || Clearli.io'/>
        <section className='white-content'>
            <h1>var, let, const</h1>
            <p><span className='variable'>var</span>, <span className='variable'>let</span> and <span className='variable'>const</span> are the three types of variables in JavaScript.</p>
            <p>There are two concepts important to understand before looking at these three different types of variables.</p>
            <p><span className='variable'>Declaration</span>: when a variable is declared, this is when it is named for the first time.</p>
            <p><span className='variable'>Assignment</span>: this is when that variable is given a value.</p>
            <p>A variable must always be <span className='variable'>declared</span> before a value can be assigned to it. It is common to declare a variable and assign a value to it at the same time, as can be seen on line 3.</p>
            <Gist id='092dc5983b3220a3be338a516206c2a2' />
        </section>

        <section className='white-content'>
            <h1>var</h1>
            <p>Variables created using <span className='variable'>var</span> can be re-declared many times and the value assigned to it can also be changed many times.</p>
            <Gist id='7e216f2a30c627416de05ae8b279ea1d' />
        </section>

        <section className='white-content'>
            <h1>let</h1>
            <p><span className='variable'>let</span> means the variable can only be declared once, but you can re-assign it multiple times</p>
            <Gist id='2fba3953d4796f086e8d029640c8e973' />
            <p>We can see here that it is possible to give 'name' a new value (re-assigning) but you cannot re-declare it using the <span className='variable'>keyword.</span></p>
        </section>

        <section className='white-content'>
            <h1>const</h1>
            <p><span className='variable'>const</span> means the variable cannot be re-declared and a new value cannot be assigned to it.</p>
            <p>You should use <span className='variable'>const</span> for values you know will never change, like 24 hours in a day or 7 days in a week.</p>
            <Gist id='36a21bc1cec55584ee5f91aa361d0f3c' />
        </section>
    </Fragment>
);

export default VarLetConst;
