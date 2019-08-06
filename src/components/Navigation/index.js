import React from 'react';
import { Link } from '../index'
import { LINK_TYPE } from '../../constants'
import './Navigation.scss';

const Navigation = () => (
    <div className='Navigation'>
        <div className='Navigation-inner'>
            <Link to='/' type={LINK_TYPE.INTERNAL}>
                <h1>Clearli</h1>
            </Link>
            <div className='Navigation-resources'>
                <Link to='/how-to/add-javascript' type={LINK_TYPE.INTERNAL}> 
                    <p>How to Guides</p>
                </Link>
                <Link to='/concepts/javascript/classes' type={LINK_TYPE.INTERNAL}> 
                    <p>Concepts</p>
                </Link>
                <Link to='/jest/what-is-jest' type={LINK_TYPE.INTERNAL}> 
                    <p>Jest</p>
                </Link>
                <Link to='/resources' type={LINK_TYPE.INTERNAL}>
                    <p>Resources</p>
                </Link>
            </div>
        </div>
    </div>
);

export default Navigation;
