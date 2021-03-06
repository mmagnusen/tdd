import React, { Fragment } from 'react';
import { Helmet, CodeBlock } from '../../../../components/';

const Variables = () => (
    <Fragment>
        <Helmet 
            title='JavaScript variables'
            description='What is a variable? How do you create one and what values can it hold? Learn all about JavaScript variables.'
        />
        <section className='white-content'>
            <h4>What is a variable</h4>
            <p>A variable is a name for a value.</p>
            <p>In JavaScript, we create a variable using the <span className='variable'>var</span> keyword.</p>
            
            <CodeBlock>
                {
                    `
                        var name = 'Marilyn';

                        var age = 32;

                        var hungry = true;

                        var family = {
                            mother: 'Diana',
                            father: 'Zeus'
                        };

                        var favouriteFood = ['Jolloff rice',, 'Hummus'];
                    `
                }
            </CodeBlock>
        
            <p><span className='variable'>name</span>, <span className='variable'>age</span>, <span className='variable'>hungry</span>, <span className='variable'>family</span> and <span className='variable'>favouriteFood</span> are all variables. Those variables can hold any data type such as a word or a number.</p>
        </section>
    </Fragment>
);

export default Variables;