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
            <Link to='/courses/javascript-basics/introduction/overview' type={LINK_TYPE.INTERNAL}> 
                    Basics Course
                </Link>
                <Link to='/javascript-mechanics/syntax-parser' type={LINK_TYPE.INTERNAL}> 
                    Mechanics
                </Link>
                <Link to='/how-to/add-javascript' type={LINK_TYPE.INTERNAL}> 
                    How to Guides
                </Link>
                <Link to='/concepts/javascript/classes' type={LINK_TYPE.INTERNAL}> 
                    Concepts
                </Link>
                <Link to='/jest/what-is-jest' type={LINK_TYPE.INTERNAL}> 
                    Jest
                </Link>
                <Link to='/resources' type={LINK_TYPE.INTERNAL}>
                    Resources
                </Link>
            </div>
        </div>
    </div>
);

export default Navigation;
