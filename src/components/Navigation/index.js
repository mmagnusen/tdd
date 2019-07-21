import React, { Component } from 'react';
import { Link } from '../index'
import { LINK_TYPE } from '../../constants'
import './Navigation.scss';

class Navigation extends Component {
    render() {
        return (
            <div className='Navigation'>
                <div className='Navigation-inner'>
                    <Link to='/' type={LINK_TYPE.INTERNAL}>
                        <h1>TDD</h1>
                    </Link>
                    <div className='Navigation-resources'>
                        <Link to='/how-to' type={LINK_TYPE.INTERNAL}> 
                            <p>How to Guides</p>
                        </Link>
                        <Link to='/jest' type={LINK_TYPE.INTERNAL}> 
                            <p>Jest</p>
                        </Link>
                        {/*
                        <Link to='/enzyme' type={LINK_TYPE.INTERNAL}>
                            <p>Enzyme</p>
                        </Link>
                        */}
                        <Link to='/selenium' type={LINK_TYPE.INTERNAL}> 
                            <p>Selenium</p>
                        </Link>
                        <Link to='/resources' type={LINK_TYPE.INTERNAL}>
                            <p>Resources</p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;
