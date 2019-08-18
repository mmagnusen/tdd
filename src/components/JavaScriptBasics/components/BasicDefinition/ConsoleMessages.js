import React, { Fragment } from 'react';
import { CodeBlock, Helmet, Link } from '../../../../components/';
import { ConsoleLog, ConsoleInfo, ConsoleWarning, ConsoleError } from '../../../../assets';
import { LINK_TYPE } from '../../../../constants/';

const ConsoleMessages = () => (
    <Fragment>
        <Helmet 
            title='Console messages in JavaScript'
            description='What is a console message? Learn all about the different types of console messages in JavaScript and how you can use them to help debug your code.'
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
            <CodeBlock>
                {
                    `
                        console.log('hello, this is a console log');
                    `
                }
            </CodeBlock>
            <img src={ConsoleLog} alt='console log'/>
        </section>

        <section className='white-content'>
            <h4>Console.info</h4>
            <CodeBlock>
                {
                    `
                    console.info('hello, this is a console info');
                    `
                }
            </CodeBlock>
            <img src={ConsoleInfo} alt='console info'/>
        </section>

        <section className='white-content'>
            <h4>Console.warn</h4>
            <CodeBlock>
                {
                    `
                        console.warn('hello, this is a console warning');
                    `
                }
            </CodeBlock>
            <img src={ConsoleWarning} alt='console warning'/>
        </section>

        <section className='white-content'>
            <h4>Console.error</h4>
            <CodeBlock>
                {
                    `
                    console.error('hello, this is a console error');
                    `
                }
            </CodeBlock>
            <img src={ConsoleError} alt='console error'/>
        </section>
    </Fragment>
);

export default ConsoleMessages;