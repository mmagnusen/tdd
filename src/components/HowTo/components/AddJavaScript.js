import React, { Fragment } from 'react';
import { Link, Gist, Helmet } from '../../../components';
import { LINK_TYPE } from '../../../constants';
import { BoilerPlate } from '../../../assets';

const AddJavaScript = () => (
    <Fragment>
        <Helmet 
            title='How to add JavaScript'
            description='How do you add JavaScript to a project without using a framework? Learn how to add JavaScript code to your project.'
        />
        <section className='white-content'>
            <h1>How to add JavaScript to a project</h1>
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
            <h1>Script Tags</h1>
            <p>Adding JavaScript code can only be done using a script tag, there are two ways we can add these tags:</p>
                <ul>
                    <li>Write code directly within script tags
                        <ul>
                            <li>Script tag in head</li>
                            <li>Script tag in body</li>
                        </ul>
                    </li>
                    <li>Link to seperate JavaScript file</li>
                </ul>
            <br/>

        </section>
        <section className='white-content'>
            <h1>Write your JavaScript code directly within the script tags</h1>
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

        <section className='white-content'>
            <h4>The better way is to put your JavaScript code inside a separate file, and link to it from your index file.</h4>

            <p>Replace the code in <span className='variable'>index.html</span> with:</p>
            <Gist id='e86064c777d01766caf250e4743e996b' />
    
            <p>The link to the separate file can be put in the head (line 11) or the body (line 21) of the <span className='variable'>html.</span></p>
            <p>Our JavaScript code is contained within files called <span className='variable'>headJavaScript.js</span> and  <span className='variable'>mainJavaScript.js</span>so we provide the name and path to these files as the source of our scripts.</p>
        </section>

        <section className='white-content'>
            <h1>Summary</h1>
            <p>You can place a script tag in the head, in the body or both.</p>
            <p>You can also add a link to a separate JavaScript file, either on its own or use in combination with script tags in the head and body.</p>
            <p>Best practice is to place your JavaScript code in a separate file, because it makes your code easier to read and work with. This should be put in the <span className='variable'>head</span>, so the JavaScript is loaded by the browser ready for any code which may rely upon it on initial load.</p>
        </section>
    </Fragment>
);

export default AddJavaScript;
