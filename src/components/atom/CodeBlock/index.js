import React, { Component } from 'react';
import './CodeBlock.scss';

class CodeBlock extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className='CodeBlock'>
                <pre>
                    <code>
                        {children}
                    </code>
                </pre>
            </div>
        )
    }
}

export default CodeBlock;