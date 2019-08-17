import React from 'react';
import { MaterialNavigation, Link } from '../';
import './PageNavigation.scss';

const PageNavigation = ({ links }) => (
    <div className='PageNavigation'>
        <MaterialNavigation links={links}/>
            <ul>
                {links.map((link) => (
                    <Link type={link.type} to={link.to} key={link.text}>
                        <li onClick={link.onClick}>{link.text}</li>
                    </Link>
                ))}
            </ul>
    </div>
);

export default PageNavigation;