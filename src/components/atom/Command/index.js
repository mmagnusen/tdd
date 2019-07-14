import React, { Component } from 'react';
import './Command.scss';

class Command extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className='Command'>
                <pre>
                    <code>
                        {children}
                    </code>
                </pre>
            </div>
        )    
    }
}

export default Command;