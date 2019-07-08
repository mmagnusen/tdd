import React, { Component } from 'react';
import { Link } from '../index';
import { LINK_TYPE } from '../../constants/'
import './Home.scss';

class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <section className='container'>
                    <section className='white-content'>
                        <h1>What is testing?</h1>
                        <p>The aim of testing is to minimise bugs in production and to make sure your application behaves as you expect it to.
                        </p>
                    </section>
                    <section className='white-content'>
                    <h1>What is Test Driven Development?</h1>
                    <p>Test Driven Development (TDD) treats testing as part of the development process, rather than an after-thought</p>
                    </section>
                    <section className='white-content'>
                        <h1>What should we test?</h1>
                        <p>
                            We do not need to test functions created by third party libraries, these have already been tested in those libraries.
                            We should only test code we write ourselves
                        </p>
                    </section>
                    <section className='white-content'>
                    <h1>What can we implement tests?</h1>
                    <p>
                        There is a wide variety of front-end frameworks for testing. One of the most popular is <Link type={LINK_TYPE.EXTERNAL} to='https://jestjs.io/'>Jest</Link>.
                    </p>
                </section>
                </section>
            </div>
        )
    }
}

export default Home;