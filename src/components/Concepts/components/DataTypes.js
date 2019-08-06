import React, { Fragment } from 'react';
import { Link, Gist, Helmet } from '../../../components';
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
            <Gist id='4f9c740d704724f8e2fa4018a9569198' />
            <p>Each of the above are valid strings in JavaScript.</p>

            <h4>Number</h4>
            <p>An integer is a whole number.</p>
            <p>A float is a number with a decimal.</p>
            <p>In JavaScript, the type 'number' represents both integers and floats</p>
            <Gist id='6efcb945bc2d06bc57480c2746856d40' />

            <h4>Boolean</h4>
            <p>A boolean value can only be <span className='variable'>true</span> or <span className='variable'>false</span>.</p>
            <Gist id='54a2381ad5f2bc9e72612dbea51e8017' />

            <h4>Null</h4>
            <p><span className='variable'>Null</span> means it is empty or the value is unknown. Strangely, the type of <span className='variable'>null</span> is an <span className='variable'>object</span> in JavaScript.</p>
            <Gist id='c6f92438f6ea8d0551cc1fb1fe9f590a' />

            <h4>Undefined</h4>
            <p><span className='variable'>Undefined</span> means the value is not assigned.</p>
            <p>You should avoid assigning <span className='variable'>undefined</span> to variables, but instead use <span className='variable'>null</span>.</p>
            <p>We use <span className='variable'>undefined</span> to check if a variable has been declared and if a value is assigned to it.</p>
            <Gist id='15962fde83805b1c8a4ec4bf9cba75dc' />

            <h4>Symbol</h4>
            <p>For a detailed explanation:</p>
            <Link type={LINK_TYPE.EXTERNAL} to='https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/'>https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/</Link>
        </section>

        <section className='white-content'>
            <h1>Objects</h1>
            <p><span className='variable'>Objects</span> are a collection of key:value pairs. The key is a string, the value can be anything.</p>
            <Gist id='0cdf3657c7bdedf1ea7092d3730508e3' />

            <h4>Arrays are objects within JavaScript</h4>
            <p><span className='variable'>Objects</span> have methods and properties.</p>
            <Gist id='9296454dba15c2c36f154c4a3c476202' />
            <p>We know an <span className='variable'>array</span> is an object because it has values such as <span className='variable'>Array.length</span></p>
            <p>They also have methods such as <span className='variable'>Array.forEach()</span>, <span className='variable'>Array.map()</span>, <span className='variable'>Array.reduce()</span>, - these are known as array iteration methods.</p>

            <h4>functions</h4>
            <p>In JavaScript, any data type which isn't a <span className='variable'>primitive</span> is an <span className='variable'>object</span>. This means that functions are also objects.</p>
            <p>How is this possible?</p>
            <Gist id='0921889853ed70bb45bc15938d407df0' />
            <p>With our simple test above, we can see that the <span className='variable'>prototype</span> of our <span className='variable'>function</span> is actually an <span className='variable'>object</span>.</p>
            <p>We will find out about <span className='variable'>prototypes</span> in the next section. For now, you just need to know that <span className='variable'>functions</span> are<span className='variable'> objects</span>, because functions inherit from the  <span className='variable'>object</span> prototype.</p>
        </section>

    </Fragment>
);

export default DataTypes;
