import React, { Component } from 'react';
import ScriptTags from './ScriptTags';
import SeparateFile from './SeparateFile';

class AddingJavaScript extends Component {
    renderPageTitle = () => {
        
        const { slug } = this.props;

        const titleMap = {
            'script-tags': 'Script tags',
            'separate-file': 'Separate file',
        }

        return   (
            <div className='JavaScriptBasics-pageTitle'>
                <h4>Adding JavaScript to a project: {`${titleMap[slug]}`}</h4>
            </div>
        )
    }
    render() {
        const { activeChapter } = this.props;

        return (
            <div>
                {this.renderPageTitle()}
                {activeChapter.activeIndex === 0 && <ScriptTags />}
                {activeChapter.activeIndex === 1 && <SeparateFile />}
            </div>
        )
    }   
}
export default AddingJavaScript;