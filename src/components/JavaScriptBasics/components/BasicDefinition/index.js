import React, { Component } from 'react';
import Variables from './Variables';
import ConsoleMessages from './ConsoleMessages';

class BasicDefinition extends Component {
    renderPageTitle = () => {
        
        const { slug } = this.props;

        const titleMap = {
            'variables': 'Variables',
            'console-messages': 'Console messages',
        }

        return   (
            <div className='JavaScriptBasics-pageTitle'>
                <h4>Basic Definitions: {`${titleMap[slug]}`}</h4>
            </div>
        )
    }
    render() {
        const { activeChapter } = this.props;

        return (
            <div>
                {this.renderPageTitle()}
                {activeChapter.activeIndex === 0 && <Variables />}
                {activeChapter.activeIndex === 1 && <ConsoleMessages />}
            </div>
        )
    }   
};

export default BasicDefinition;