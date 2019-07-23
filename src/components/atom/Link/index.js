import React from 'react';
import { Link as ReactLink  } from 'react-router-dom';
import { LINK_TYPE } from '../../../constants/';

const Link = ({ to, children, type }) =>  { 
    switch(type) {
        case LINK_TYPE.INTERNAL: 
            return <ReactLink to={to}> {children}</ReactLink> ;
        case LINK_TYPE.EXTERNAL:
            return <a href={to} target="_blank" rel="noopener noreferrer">{children}</a>;
        case LINK_TYPE.ANCHOR:
            return <ReactLink to={to}>{children}</ReactLink>;
        default: 
            return <ReactLink to={to}> {children}</ReactLink>;
        }   
};

export default Link;