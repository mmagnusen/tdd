import React, { Component } from 'react';
import { PageNavigation } from '../../components/';
import { WhatIsSelenium } from './components';

import './Selenium.scss';

class Selenium extends Component {
    state = {
        activeIndex: 0
    }

    updateActiveIndex = (activeIndex) => {
        this.setState({ activeIndex })
    }

    navigation = () => (
        <ul>
            <li onClick={() => this.updateActiveIndex(0)}> What is Selenium?</li>
            <li onClick={() => this.updateActiveIndex(1)}> Snapshot tests</li>
            <li onClick={() => this.updateActiveIndex(2)}> Writing a test</li>
        </ul>
    )
    
    render() {

        const { activeIndex } = this.state;

        return (
            <div className='Selenium'>
                <div className='container'>
                <PageNavigation>{this.navigation()}</PageNavigation>

                <div className='Selenium-rightSection'>
                    {activeIndex === 0 && <WhatIsSelenium />}

            </div>
                </div>
            </div>
        )
    }
}

export default Selenium;