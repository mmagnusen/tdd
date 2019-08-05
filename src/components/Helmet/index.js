import React from 'react';
import { string } from 'prop-types';
import { Helmet as ReactHelmet } from 'react-helmet';

const Helmet = ({ title, description }) => (
    <ReactHelmet>
        <meta charSet="utf-8" />
        <title>{ title }</title>
        <meta name="description" content={description} />
    </ReactHelmet>
);

Helmet.propTypes = {
    title: string,
    description: string,
}

Helmet.defaultProps = {
    title: 'Front-end tutorials for JavaScript || Clearli.io',
    description: 'Master JavaScript with a range of tutorials to help you understand the core concepts.',
}

export default Helmet;