import React from 'react';
import './CodeBlock.scss';

const  CodeBlock = ({ children }) => (
    <div className='CodeBlock'>
        <pre>
            <code>
                {children}
            </code>
        </pre>
    </div>
);

export default CodeBlock;