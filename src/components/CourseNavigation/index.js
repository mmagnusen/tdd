import React from 'react';
import './CourseNavigation.scss';

const CourseNavigation = ({ children, courseTitle }) => (
    <div className='CourseNavigation'>
        <div className='CourseNavigation-courseTitle'>
            <h4>{courseTitle}</h4>
        </div>
        {children}
    </div>
);

export default CourseNavigation;