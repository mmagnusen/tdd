import React from 'react';
import './Table.scss';

const Table = ({tableHead, children}) => (
    <div className='Table'>
        <div className='Table-head'>
            <h4>{tableHead}</h4>
        </div>
        <table>
            {children}
        </table>
    </div>
   
)

export default Table;