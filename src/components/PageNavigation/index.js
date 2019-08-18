import React, { Fragment } from 'react';
import { MaterialNavigation } from '../';
import Chapter from './Chapter';
import './PageNavigation.scss';

const PageNavigation = ({ navigationChapters }) => (
    <Fragment>
    {/*
        <MaterialNavigation links={links}/>
    */}
        <div className='PageNavigation'>
                <ul>
                    {navigationChapters.map((chapter) => <Chapter key={chapter.name}chapter={chapter}/>)}
                </ul>
        </div>
    </Fragment>
);

export default PageNavigation;