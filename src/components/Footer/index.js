import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer className='Footer'>
                <ul>
                    Jest
                    <li>What is Jest?</li>
                    <li>Snapshot tests</li>
                    <li>Writing tests</li>
                </ul>
                <ul>
                    Selenium
                    <li>What is Selenium?</li>
                    <li>Selenium and React</li>
                </ul>
                <ul>
                    Resources
                    <li>General testing</li>
                    <li>Helpful for beginners</li>
                    <li>Jest</li>
                    <li>Selenium</li>
                    <li>Git repositories</li>
                </ul>
            </footer>
        );
    }
}

export default Footer;
