import React, { Component } from 'react';

class Introduction extends Component {
    renderPageTitle = () => {
        
        const { slug } = this.props;

        const titleMap = {
            'what-is-javascript': 'What is JavaScript',
            'what-can-you-do-with-javascript': 'What can you do with JavaScript'
        }

        return   (
            <div>
                <h1>Introduction: {`${titleMap[slug]}`}</h1>
            </div>
        )
    }
    render() {
        const { activeIndex } = this.props;

        return (
            <div>
                {this.renderPageTitle()}

            </div>
        )
    }   
}

export default Introduction;