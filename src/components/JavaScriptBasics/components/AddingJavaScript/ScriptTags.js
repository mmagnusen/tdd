import React, { Fragment } from 'react';
import { Helmet, Link, Gist } from '../../../../components/';
import { LINK_TYPE } from '../../../../constants/';
import { BoilerPlate } from '../../../../assets';

const ScriptTags = () => (
    <Fragment>
        <Helmet 
            title='Add JavaScript to your project using a script tag'
            description='How do you add JavaScript to a project without using a framework? Learn how to add JavaScript code to your project using script tags.'
        />
        <section className='white-content'>
            <h4>Adding JavaScript using script tags.</h4>
            <p>You can view a boilerplate template here: <Link to='https://github.com/mmagnusen/boilerplate' type={LINK_TYPE.EXTERNAL}>https://github.com/mmagnusen/boilerplate</Link></p>

            <ul>
                <li>Clone the project</li>
                <li>Open your preferred web browser</li>
                <li>Click on <span className='variable'>file</span> > <span className='variable'>open file</span></li>
                <li>Find the location of the project we've just cloned and double-click on the <span className='variable'>index.html</span> file</li>
                <li>If you open the inspector, you should be able to see four console logs</li>
            </ul>

            <p>Let's find out where these logs are coming from.</p>
            <img src={BoilerPlate} alt='Boilerplate html console log' />
        </section>

        <section className='white-content'>
            <h4>Script Tags</h4>
            <p>Adding JavaScript code can only be done using a script tag, there are two ways we can add these tags:</p>
                <ul>
                    <li>Write code directly within script tags
                        <ul>
                            <li>Script tag in head</li>
                            <li>Script tag in body</li>
                        </ul>
                    </li>
                    <li>Link to a seperate JavaScript file</li>
                </ul>
            <br/>
        </section>
        
        <section className='white-content'>
            <h4>Script tag in head</h4>
            <p>Lines 11-13: This is where we are seeing <span className='variable'>console.log('hello, this is a log coming from index.html head')</span></p>

            <h4>Script tag in body</h4>
            <p>This can be anywhere in the <span className='variable'>body</span> of the html</p>
            <ul>
                <li>At the start of the body - lines 17-19: console.log('hello, this is a log coming from index.html at the start of the body')</li>
                <li>Anywhere in the middle of the body - lines 24-26: console.log('hello, this is a log coming from index.html in the middle of the body')</li>
                <li>At the end of the body: lines 30-32: console.log('hello, this is a log coming from index.html at the end of the body')</li>
            </ul>

            <Gist id='3d9570d44cb13490e12accb265f27647' />

        </section>
    </Fragment>
);

export default ScriptTags;