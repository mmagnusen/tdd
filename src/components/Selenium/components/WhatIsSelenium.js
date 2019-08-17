import React, { Fragment } from 'react';
import { Link } from '../../../components';
import { LINK_TYPE } from '../../../constants';

const WhatIsSelenium = () => (
    <Fragment>
        <section className='white-content'>
            <h1>What is Selenium?</h1>
            <p>You deploy your app. You check the homepage, you click on links to other pages, you check login, register and other functionality. You discover a bug. You fix it and deploy and do all your checks again.</p>
            <p><Link to='https://jestjs.io/' type={LINK_TYPE.EXTERNAL}>Selenium</Link> is a tool which allows you to automate this testing.</p>
        </section>

        <section className='white-content'>
            <h1>What is end-to-end testing?</h1>
            <p>End-to-end testing means testing your application by using it as a real user would. Actions will be carried out in the front-end, which may update something in a database or send a message to another system. End-to-end testing is the process of testing that every part of your application responds in the correct way to user interaction.</p>
            <p>Selenium is an end-to-end testing tool because it replicates user behaviour to test the entire stack of your application.</p>
        </section>

        <section className='white-content'>
            <h1>What can be tested with Selenium?</h1>
            <p>Selenium can test web applications only.</p>
        </section>

        <section className='white-content'>
            <h1>Why do we like Selenium?</h1>
            <ul>
                <li>It's open source, meaning it's free</li>
                <li>It works accross multiple browsers and devices</li>
            </ul>
        </section>
    </Fragment>
);

export default WhatIsSelenium;
