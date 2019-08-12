import React, { Component } from 'react';

class DocumentObjectModel extends Component {
    renderPageTitle = () => {
        
        const { slug } = this.props;

        const titleMap = {
            'what-is-the-dom': 'What is the DOM',
            'manipulating-the-dom': 'Manipulating the DOM',
        }

        return   (
            <div>
                <h1>The DOM: {`${titleMap[slug]}`}</h1>
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
export default DocumentObjectModel;