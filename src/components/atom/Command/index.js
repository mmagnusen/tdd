import React from 'react';
import './Command.scss';

const Command = ({ children }) => (
    <div className='Command'>
        <pre>
            <code>
                {children}
            </code>
        </pre>
    </div>
);

export default Command;