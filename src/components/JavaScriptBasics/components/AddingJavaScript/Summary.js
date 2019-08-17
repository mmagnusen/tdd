import React, { Fragment } from 'react';
import { Helmet } from '../../../../components/';

const Summary = () => (
    <Fragment>
        <Helmet 
            title='How to add JavaScript'
            description='How do you add JavaScript to a project without using a framework? Learn how to add JavaScript code to your project.'
        />
        <section className='white-content'>
            <h1>Summary</h1>
            <p>You can place a script tag in the head, in the body or both.</p>
            <p>You can also add a link to a separate JavaScript file, either on its own or use in combination with script tags in the head and body.</p>
            <p>Best practice is to place your JavaScript code in a separate file, because it makes your code easier to read and work with. This should be put in the <span className='variable'>head</span>, so the JavaScript is loaded by the browser ready for any code which may rely upon it on initial load.</p>
        </section>
    </Fragment>
);

export default Summary;