import React, { Fragment } from 'react';
import { Helmet, Gist, Link } from '../../../../components/';
import { ConsoleLog, ConsoleInfo, ConsoleWarning, ConsoleError } from '../../../../assets';
import { LINK_TYPE } from '../../../../constants/';

const ConsoleMessages = () => (
    <Fragment>
        <Helmet 
            title='How to add JavaScript'
            description='How do you add JavaScript to a project without using a framework? Learn how to add JavaScript code to your project.'
        />
        <section className='white-content'>
            <p>Console messages are messages we can print to the console from our code, to give us information about what is happening within our code.</p>
            <p>We can see which line in our code generated the console message, this is very helpful when debugging, so we know exactly where to look.</p>
            <p>There are lots of different types of console messages, we will cover the most commonly used below.</p>
            <p>Check out the <Link type={LINK_TYPE.EXTERNAL} to='https://nodejs.org/api/console.html#console_console_info_data'>Node documentation on console messages</Link> for a full reference of all the console messages available.</p>
            <p>To log a message to the console, we type in <span className='variable'>console</span> followed by a<span className='variable'>.</span>,the name of the type of message, and then a set of parentheses.</p>
            <p>Inside the parentheses, we can put in the message we want to show:</p>
            <p><span className='variable'>console.log('message here')</span></p>
        </section>

        <section className='white-content'>
            <h4>Console.log</h4>
            <Gist id='7c17f099058a1bc7dee1f958dd333cb4'/>

            <img src={ConsoleLog} alt='console log'/>
        </section>

        <section className='white-content'>
            <h4>Console.info</h4>
            <p></p>
            <Gist id='c18ac4d85f172f1db6d6cb8e71270638'/>
            <img src={ConsoleInfo} alt='console info'/>
        </section>

        <section className='white-content'>
            <h4>Console.warn</h4>
            <p></p>
            <Gist id='dc3215dcbbf615fe7295285ec5cfe602'/>
            <img src={ConsoleWarning} alt='console warning'/>
        </section>

        <section className='white-content'>
            <h4>Console.error</h4>
            <p></p>
            <Gist id='fcde34ae051af52a0c3a91753d9727f6'/>
            <img src={ConsoleError} alt='console error'/>
        </section>
    </Fragment>
);

export default ConsoleMessages;