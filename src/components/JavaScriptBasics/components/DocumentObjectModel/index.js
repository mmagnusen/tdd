import React, { Component } from 'react';
import WhatIsTheDom from './WhatIsTheDom';
import ManipulatingDom from './ManipulatingDom';

class DocumentObjectModel extends Component {
    renderPageTitle = () => {
        
        const { slug } = this.props;

        const titleMap = {
            'what-is-the-dom': 'What is the DOM',
            'manipulating-the-dom': 'Manipulating the DOM',
        }

        return   (
            <div className='JavaScriptBasics-pageTitle'>
                <h4>The DOM: {`${titleMap[slug]}`}</h4>
            </div>
        )
    }
    render() {
        const { activeChapter } = this.props;

        return (
            <div>
                {this.renderPageTitle()}
                {activeChapter.activeIndex === 0 && <WhatIsTheDom />}
                {activeChapter.activeIndex === 1 && <ManipulatingDom />}
            </div>
        )
    }   
}
export default DocumentObjectModel;