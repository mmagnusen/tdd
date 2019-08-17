import React from 'react';

const redWords = ['import', 'function', 'return', 'const', 'let', 'var']
const CodeLine = ({children}) => (
    <div>
        <p>{children}</p>
    </div>
);

export default CodeLine;

