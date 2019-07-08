import React, { Component } from 'react';
import { Link as ReactLink  } from 'react-router-dom';
import { LINK_TYPE } from '../../../constants/';

class Link extends Component {
    render() {
        const { to, children, type } = this.props;

        return ( type === LINK_TYPE.INTERNAL ? <ReactLink to={to}> {children}</ReactLink> : <a href={to} target="_blank" rel="noopener noreferrer">{children}</a>
        )
    }
}

export default Link;