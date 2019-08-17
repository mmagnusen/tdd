import React, { Fragment } from 'react';
import { Gist, Helmet } from '../../../../components/';

const AssignmentOperator = () => (
    <Fragment>
        <Helmet 
            title='JavaScript assignment operator'
            description='What is the assignment operator and how do you use it to assign values to variables?'
        />
        <section className='white-content'>
            <h4>Assignment Operator</h4>
            <p>Definition: to transfer to another</p>
            <p>If I say "I assign my all my possessions to you", what would you think?</p>
            <p>Those posessions themselves wouldn't change in anyway, but the person to who they belong has changed.</p>
            <p>In programming, assignment means to transfer a value to a variable. We do this using the assignment operator: <span className='variable'>=</span></p>
            <p>Here, we have created a variable called <span className='variable'>age</span> and assigned it a value of 21:</p>
            <Gist id='ee94076cc3411d09bbb941ed9d601c3e' short/>
        
            <p>Here is another example, where we create a variable called <span className='variable'>name</span> and assigned it a value of 'Marilyn'</p>
            <Gist id='23580c8b65e79c9014b8fb31e46b2629'/>
        </section>
    </Fragment>
);

export default AssignmentOperator;