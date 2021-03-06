import React, { Fragment } from 'react';
import { Link, Command, Helmet} from '../../';
import { LINK_TYPE } from '../../../constants';
import { serve } from '../../../assets';

const RunServer = () => (
    <Fragment>
        <Helmet 
            title='How to run a local server using JavaScript'
            description='Guides you through how to run your vanilla project on a local server without using a framework.'
        />
        <section className='white-content'>
            <h1>How to run a local server</h1>
            <p>You can view clone the demo project here: <Link to='https://github.com/mmagnusen/boilerplate' type={LINK_TYPE.EXTERNAL}>https://github.com/mmagnusen/boilerplate</Link></p>
            <p>Navigate to the root of the project and run:</p>
            
            <Command>
                npx serve
            </Command>

            <p>This will work as it is, without needing to manually install any packages.</p>
            <p>If the <span className='variable'>serve</span> command isn't already in your <span className='variable'>$PATH</span>, npx will install the module and run it. </p>
            <img src={serve} alt='npx serve command'/> 
            <p>You can visit the served site at the destination indicated, by clicking directly on the link within the terminal.</p>
        </section>
    </Fragment>
);

export default RunServer;