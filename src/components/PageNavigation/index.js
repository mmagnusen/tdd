import React from 'react';
import { MaterialNavigation } from '../';
import './PageNavigation.scss';

const PageNavigation = ({ children }) => (
    <div className='PageNavigation'>
        <MaterialNavigation />
        {children}
    </div>
);

export default PageNavigation;