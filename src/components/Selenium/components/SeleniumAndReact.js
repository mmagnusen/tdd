import React, { Fragment } from 'react';
import { Link, Command } from '../../../components';
import { LINK_TYPE } from '../../../constants';

const SeleniumAndReact = () => (
    <Fragment>
        <section className='white-content'>
            <h1>Testing React applications with Selenium</h1>
            <Command>
                npm install --save-dev jest jest-environment-webdriver chromedriver
            </Command>
        </section>
    </Fragment>
);

export default SeleniumAndReact;
