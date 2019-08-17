import React, { Fragment } from 'react';
import { MaterialNavigation, Link } from '../';
import './PageNavigation.scss';

const PageNavigation = ({ links }) => (
    <Fragment>
        <MaterialNavigation links={links}/>
        <div className='PageNavigation'>
                <ul>
                    {links.map((link) => (
                        <Link type={link.type} to={link.to} key={link.text}>
                            <li onClick={link.onClick}>{link.text}</li>
                        </Link>
                    ))}
                </ul>
        </div>
    </Fragment>
);

export default PageNavigation;