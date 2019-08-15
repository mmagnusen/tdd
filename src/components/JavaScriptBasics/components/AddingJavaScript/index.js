import React, { Component } from 'react';
import ScriptTags from './ScriptTags';
import SeparateFile from './SeparateFile';
import Summary from './Summary';

class AddingJavaScript extends Component {
    renderPageTitle = () => {
        
        const { slug } = this.props;

        const titleMap = {
            'script-tags': 'Script tags',
            'separate-file': 'Separate file',
            'summary': 'Summary',
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
                {activeChapter.activeIndex === 2 && <Summary />}
            </div>
        )
    }   
}
export default AddingJavaScript;