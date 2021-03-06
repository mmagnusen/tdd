import React, { Fragment } from 'react';
import { Link, Helmet } from '../index';
import { LINK_TYPE } from '../../constants/'
import './Testing.scss';

const Testing = () => (
    <Fragment>
        <Helmet 
            title='Front-end Testing Tutorials'
            description='Learn how to test your JavaScript projects and build more reliable applications.'
        />
        <div className='Testing'>
            <section className='container'>
            <h1 className='page-title'>Welcome to the home of Front-end Testing</h1>
                <section className='white-content'>
                    <h1>What is testing?</h1>
                    <p>The aim of testing is to minimise bugs in production and to make sure your application behaves as you expect it to.
                    </p>
                </section>
                <section className='white-content'>
                    <h1>What is Test Driven Development?</h1>
                    <p>Test Driven Development (TDD) treats testing as part of the development process, rather than an after-thought. You write the test first, and then you write code to make that test pass.</p>
                </section>
                <section className='white-content'>
                    <h1>What should we test?</h1>
                    <p>
                        We do not need to test code written by third party libraries, these have already been tested in those libraries.
                        We should only test code we write ourselves.
                    </p>
                </section>
                <section className='white-content'>
                    <h1>What can we use to implement tests?</h1>
                    <p>
                        There is a wide variety of front-end frameworks for testing. One of the most popular is <Link type={LINK_TYPE.EXTERNAL} to='https://jestjs.io/'>Jest</Link>.
                    </p>
                </section>
            </section>
        </div>
    </Fragment>
);

export default Testing;