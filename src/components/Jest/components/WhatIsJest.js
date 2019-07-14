import React, { Fragment } from 'react';
import { Link } from '../../../components';
import { LINK_TYPE } from '../../../constants';

const WhatIsJest = () => (
    <Fragment>
        <section className='white-content'>
            <h1>What is Jest?</h1>
            <p><Link to='https://jestjs.io/' type={LINK_TYPE.EXTERNAL}>Jest</Link> is a test runner. This means that it runs the tests you have written and tells you if the code passes or fails those tests.</p>
            <p>It's created by the team at <Link to='https://www.facebook.com/' type={LINK_TYPE.EXTERNAL}>Facebook</Link> </p>
            <p>It comes pre-installed in every <Link to='https://www.npmjs.com/package/create-react-app' type={LINK_TYPE.EXTERNAL}>create-react-app</Link> application</p>
            <p>Works with many front-end frameworks including <Link to='https://reactjs.org/' type={LINK_TYPE.EXTERNAL}>React</Link>, <Link to='https://vuejs.org/' type={LINK_TYPE.EXTERNAL}>Vue</Link> and many more</p>
        </section>

        <section className='white-content'>
            <h1>Why is it useful?</h1>
            <p>Provides an overview of your code coverage - this means you know how much of your code is covered by tests. Generally, the higher this number, the better.</p>
        </section>

        <section className='white-content'>
            <h1>What can we test with Jest?</h1>
            <p>We can do things like check that our app renders correctly and doesn't crash when it loads.</p>
        </section>
    </Fragment>
);

export default WhatIsJest;
