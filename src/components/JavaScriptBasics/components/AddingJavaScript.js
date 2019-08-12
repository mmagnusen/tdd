import React, { Component } from 'react';

class AddingJavaScript extends Component {
    renderPageTitle = () => {
        
        const { slug } = this.props;

        const titleMap = {
            'script-tags': 'Script tags',
            'separate-file': 'Separate file',
        }

        return   (
            <div>
                <h1>Adding JavaScript to a project: {`${titleMap[slug]}`}</h1>
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
export default AddingJavaScript;