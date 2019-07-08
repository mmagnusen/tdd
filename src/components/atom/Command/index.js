import React, { Component } from 'react';
import './Command.scss';

class Command extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className='Command'>{children}</div>
        )    
    }
}

export default Command;