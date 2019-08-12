import React, { Component } from 'react';
import WhatIsJavaScript from './WhatIsJavaScript';
import WhatCanYouDo from './WhatCanYouDo';

class Introduction extends Component {
    renderPageTitle = () => {
        
        const { slug } = this.props;

        const titleMap = {
            'what-is-javascript': 'What is JavaScript',
            'what-can-you-do-with-javascript': 'What can you do with JavaScript'
        }

        return   (
            <div className='JavaScriptBasics-pageTitle'>
                <h4>Introduction: {`${titleMap[slug]}`}</h4>
            </div>
        )
    }
    render() {
        const { activeChapter } = this.props;

        return (
            <div>
                {this.renderPageTitle()}
                {activeChapter.activeIndex === 0 && <WhatIsJavaScript />}
                {activeChapter.activeIndex === 1 && <WhatCanYouDo />}
            </div>
        )
    }   
}

export default Introduction;