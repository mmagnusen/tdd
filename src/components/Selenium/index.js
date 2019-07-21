import React, { Component } from 'react';
import { PageNavigation } from '../../components/';
import { WhatIsSelenium, SeleniumAndReact } from './components';

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
            <li onClick={() => this.updateActiveIndex(1)}> Selenium and React</li>

        </ul>
    )
    
    render() {

        const { activeIndex } = this.state;

        return (
            <div className='Selenium'>
                <div className='container'>
                    <h1 className='page-title'>
                        <div/>
                        Testing With Selenium
                    </h1>
                    <div className='Selenium-content'>
                        <PageNavigation>{this.navigation()}</PageNavigation>

                        <div className='Selenium-rightSection'>
                            {activeIndex === 0 && <WhatIsSelenium />}
                            {activeIndex === 1 && <SeleniumAndReact />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Selenium;