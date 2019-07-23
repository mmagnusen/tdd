import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

const Helmet = ({ title }) => (
    <ReactHelmet>
        <meta charSet="utf-8" />
        <title>{ title }</title>
        <meta name="description" content="Front-end testing tutorials for Jest, Enzyme and React.js" />
    </ReactHelmet>
);

export default Helmet;