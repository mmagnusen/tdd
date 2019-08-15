import React from 'react';
import ReactGist from 'react-gist';
import Classnames from 'classnames';
import './Gist.scss';

const Gist = ({ id, short }) => (
    <div className={Classnames('Gist', {'Gist-short': short})}>
        <ReactGist id={id}/>
    </div>
);

export default Gist;