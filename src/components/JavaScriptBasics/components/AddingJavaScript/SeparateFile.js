import React, { Fragment } from 'react';
import { Helmet, Gist } from '../../../../components/';

const SeparateFile = () => (
    <Fragment>
    <Helmet 
        title='How to add JavaScript'
        description='How do you add JavaScript to a project without using a framework? Learn how to add JavaScript code to your project.'
    />

    <section className='white-content'>
        <h4>Adding JavaScript from a separate file</h4>
        <p>The better way is to put your JavaScript code inside a separate file, and link to it from your index file.</p>

        <p>Replace the code in <span className='variable'>index.html</span> with:</p>
        <Gist id='e86064c777d01766caf250e4743e996b' />

        <p>The link to the separate file can be put in the head (line 11) or the body (line 21) of the <span className='variable'>html.</span></p>
        <p>Our JavaScript code is contained within files called <span className='variable'>headJavaScript.js</span> and  <span className='variable'>mainJavaScript.js</span>so we provide the name and path to these files as the source of our scripts.</p>
    </section>
    
</Fragment>
)

export default SeparateFile;