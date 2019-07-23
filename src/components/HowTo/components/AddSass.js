import React, { Fragment } from 'react';
import { Link } from '../../';
import { LINK_TYPE } from '../../../constants';

const AddSass = () => (
    <Fragment>
        <section className='white-content'>
            <h1>How to add Sass to a vanilla project</h1>
            <p>You can view a boilerplate template here: <Link type={LINK_TYPE.EXTERNAL} to='https://github.com/mmagnusen/boilerplate'>https://github.com/mmagnusen/boilerplate</Link></p>
        </section>
    </Fragment>
)

export default AddSass;