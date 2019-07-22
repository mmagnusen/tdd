import React, { Fragment } from 'react';
import { Link, Gist } from '../../../components';
import { LINK_TYPE } from '../../../constants';
import { BoilerPlate } from '../../../assets';

const WhatIsJest = () => (
    <Fragment>
        <section className='white-content'>
            <h1>How to add JavaScript to a project</h1>
            <p>You can view a boilerplate template here: <Link to='https://github.com/mmagnusen/boilerplate' type={LINK_TYPE.EXTERNAL}>https://github.com/mmagnusen/boilerplate</Link></p>

            <ul>
                <li>Clone the project</li>
                <li>Open your preferred web browser</li>
                <li>Click on <span className='variable'>file</span> > <span className='variable'>open file</span></li>
                <li>Find the location of the project we've just cloned and double-click on the <span className='variable'>index.html</span> file</li>
                <li>If you open the inspector, you should be able to see two console logs</li>
            </ul>
            <p>Let's find out where these logs are coming from.</p>
            <img src={BoilerPlate} alt='Boilerplate html console log' />
            <p></p>
        </section>

        <section className='white-content'>
            <h1>Script Tags</h1>
            <p>Adding JavaScript code can only be done using a script tag, there are two ways we can add these tags:</p>
            <br/>
            <h4>1. Write your JavaScript code directly within the script tags</h4>
            <p>Lines 16-18: This is where we are seeing <span className='variable'>console.log('hello, this is a log coming from index.html')</span></p>

            <Gist id='3d9570d44cb13490e12accb265f27647' />
            <script src="https://gist.github.com/mmagnusen/3d9570d44cb13490e12accb265f27647.js"></script>
            <h4>2. The second (and better) way is to put your JavaScript code inside a separate file, and link to it from your index file.</h4>
            <span className='variable'> src="main.js"</span>
            <p>Our JavaScript code is contained within a file called <span className='variable'>main.js</span>, so we provide the name and path to this file as the source of our script at line 15</p>
        </section>
    </Fragment>
);

export default WhatIsJest;
