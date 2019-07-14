import React, { Fragment } from 'react';
import { Link } from '../../../components';
import { LINK_TYPE } from '../../../constants';

const WhatIsSelenium = () => (
    <Fragment>
        <section className='white-content'>
            <h1>What is Selenium?</h1>
            <p>You deploy your app. You check the homepage, you click on links to other pages, you check login, register and other functionality. You discover a bug. You fix it an deploy and do all your checks again.</p>
            <p><Link to='https://jestjs.io/' type={LINK_TYPE.EXTERNAL}>Selenium</Link> is a tool which allows you to automate this testing.</p>
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
