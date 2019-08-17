import React, { Fragment } from 'react';
import { Link, Helmet } from '../../../../components/';
import { LINK_TYPE } from '../../../../constants/';

const WhatIsJavaScript = () => (
    <Fragment>
        <Helmet 
            title='What is JavaScript: JavaScript Basics Course'
            description="What is JavaScript and how can it help you with your software development?"
        />
        <section className='white-content'>
            <p>JavaScript is a programming language.</p>
            <p>It is supported by most web browsers and powers almost all web applications.</p>
            <p>It originally started out as a language to simply enhance the user experience of web applications, but has evolved to become a powerful language which can do much more.</p>
        </section>
        <section className='white-content'>
            <h4>Who's using JavaScript</h4>
            <p>All your favourite apps and websits are powered by JavaScript, including:</p>
            <ul>    
                <li><Link type={LINK_TYPE.EXTERNAL} to='https://twitter.com/'>Twitter</Link></li>
                <li><Link type={LINK_TYPE.EXTERNAL} to='https://www.facebook.com/'>Facebook</Link></li>
                <li><Link type={LINK_TYPE.EXTERNAL} to='https://mail.google.com/mail/'>Gmail</Link></li>
                <li><Link type={LINK_TYPE.EXTERNAL} to='https://www.airbnb.co.uk/'>Airbnb</Link></li>
            </ul>
            <p>and thousands more. Whatever you want to build, JavaScript will help you do it.</p>
        </section>
    </Fragment>
);

export default WhatIsJavaScript;