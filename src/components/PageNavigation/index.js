import React, { Fragment } from 'react';
import { MaterialNavigation } from '../';
import Chapter from './Chapter';
import './PageNavigation.scss';

const PageNavigation = ({ courseTitle, navigationChapters }) => (
    <Fragment>
    
        <MaterialNavigation navigationChapters={navigationChapters}/>

        <div className='PageNavigation'>
            {courseTitle && (<section className='PageNavigation-title'>   
                <h4>{courseTitle}</h4>
            </section>
            )}
            <ul>
                {navigationChapters.map((chapter) => <Chapter key={chapter.name} chapter={chapter}/>)}
            </ul>
        </div>
    </Fragment>
);

export default PageNavigation;