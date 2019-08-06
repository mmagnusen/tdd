import React from 'react';
import { string } from 'prop-types';
import { Helmet as ReactHelmet } from 'react-helmet';

const Helmet = ({ title, description, slug }) => (
    <ReactHelmet>
        <meta charSet="utf-8" />
        <title>{`${title} || Clearli.io` }</title>
        <meta name="description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:url" content={slug ? `https://www.clearli.io/${slug}` : 'https://www.clearli.io'} />
        <meta property="og:site_name" content="Clearli" />
    </ReactHelmet>
);

Helmet.propTypes = {
    title: string,
    description: string,
};

Helmet.defaultProps = {
    title: 'Front-end tutorials for JavaScript',
    description: 'Master JavaScript with a range of tutorials to help you understand the core concepts.',
};

export default Helmet;