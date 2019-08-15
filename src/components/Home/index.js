import React, { Fragment } from 'react';
import { Helmet, Link } from '../index';
import { LINK_TYPE } from '../../constants';
import './Home.scss';

const Home = () => (
    <Fragment>
        <Helmet 
            title='Front-end JavaScript Tutorials'
            description='Clearli will help you gain a deeper understanding of JavaScript, from beginning to the more complex concepts. There are a range of guides and resources to help you become confident in ES6 syntax, testing, frameworks and vanilla JavaScript.'
        />
        <div className='Home'>
            <section className='container'>
                <section className='white-content'>
                    <h1>What is JavaScript</h1>
                    <p>JavaScript is a programming language. It's hugely popular and almost every application you encounter will be powered by it.</p>
                    <p>It lets you do cool things like:</p>
                    <ul>
                        <li>Add animations</li>
                        <li>Add user interaction</li>
                        <li>Manipulate the DOM</li>
                        <li>Make changes to CSS</li>
                        <li>Send and receive data</li>
                        <li>and much much more</li>
                    </ul>
                </section>

                <section className='white-content'>
                    <p>To follow the tutorials on this site, there are a few essential things you will need:</p>
                    <h4>A web browser</h4>
                    <p>A web browser with good developer tools will save you hours and help you in development.</p>
                    <p>Chrome is our browser of choice, you can download this at <Link type={LINK_TYPE.EXTERNAL} to='https://www.google.com/chrome/'>https://www.google.com/chrome/</Link></p>

                    <h4>A text editor</h4>
                    <p>Visual studio is a free text editor which comes with lots of helpful features. You can install it from <Link type={LINK_TYPE.EXTERNAL} to='https://code.visualstudio.com/'>https://code.visualstudio.com/</Link></p>

                    <h4>Access to the command line</h4>
                    <p>If you're on a mac, the Treehouse blog has a very basic <Link type={LINK_TYPE.EXTERNAL} to='https://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line'>introduction to the command line</Link></p>

                    <h4>Node.js and NPM</h4>
                    <p>Follow the Treehouse tutorial on <Link type={LINK_TYPE.EXTERNAL} to='https://treehouse.github.io/installation-guides/mac/node-mac.html'>installing Node.js and NPM for mac</Link>.</p>
                </section>
                
            </section>
        </div>
    </Fragment>
);

export default Home;