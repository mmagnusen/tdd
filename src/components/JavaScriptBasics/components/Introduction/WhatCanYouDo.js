import React, { Fragment } from 'react';

const WhatCanYouDo = () => (
    <Fragment>
        <section className='white-content'>
        <h4>What can you do with JavaScript?</h4>
        <p>The possibilities of what you can do with JavaScript are almost endless. These are just a few of the awesome things you can do with it:</p>
        <ul>
            <li>Update HTML</li>
            <li>Manipulate the DOM</li>
            <li>Change styles</li>
            <li>Create animations</li>
            <li>Exchange data and communicate with a server</li>
            <li>Add user interactions</li>
        </ul>
        </section>
        <section className='white-content'>
            <h4>What can you build with JavaScript?</h4>
            <p>JavaScript is not just for building websites. You can also use it to build</p>
            <ul>
                <li>Mobile apps</li>
                <li>Desktop apps</li>
                <li>Games</li>
            </ul>
        </section>
        <section className='white-content'>
        <h4>JavaScript is a multi-purpose language</h4>

        <p>This means that you can use it both on the client-side and the server-side.</p>

        <h4>Client-side</h4>
        <p>The client is the browser or device which is currently consuming a service. For example, when you are visiting a website, the client will be the browser.</p>
        <p>Client-side JavaScript is mostly concerned with enhancing the user experience through interactivity and manupulating the DOM.</p>

        <h4>Server-side</h4>
        <p>A server is the machine which is physically storing the files which make up a web application.</p>
        <p>Server-side JavaScript means a server can handle routing, events, the creation, manipulation, retrieval and storage of data etc</p>
        </section>
    </Fragment>
)

export default WhatCanYouDo;