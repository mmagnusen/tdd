import React, { Component } from 'react';
import './PageNavigation.scss';

class PageNavigation extends Component {
    render() {
        const { children } = this.props
        return (
            <div className='PageNavigation'>
                {children}
            </div>
        )
    }
}

export default PageNavigation;