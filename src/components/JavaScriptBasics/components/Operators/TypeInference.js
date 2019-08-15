import React, { Fragment } from 'react';
import { Gist } from '../../../../components/';

const TypeInference = () => (
    <Fragment>
        <section className='white-content'>
            <h4>The JavaScript compiler</h4>
            <p>When we write code, there is a compiler which reads the code we have written, interprets that code and executes it. "Execute" means to carry out the instructions we have written.</p>
            <p>The compiler has some special features to help it understand the code we have written. One of these features is called <span>type inference</span>.</p>
         </section>

        <section className='white-content'>
            <h4>Type inference</h4>
            <p>Type inference is where the compiler infers the type from the value. We will cover data types later in this course.</p>
            <p>For now, let us look at two data types:</p>
            <p>String: a string is a value, which is surrounded by quotation marks. This value represents a word, sentence or paragraph.</p>
            <Gist id='498822df900c988b37c0c0fe640b8241' short/>

            <p>Number: a number represents a numerical value, this can be a whole number such as <span className='variable'>12</span> or a number with a decimal point such as <span className='variable'>12.5</span></p>
            <Gist id='1358bac77a3c052caa0fb9bd1e53c3a7' short/>
            
            <h4>Finding out the type of a value</h4>
            <p>JavaScript has a handy feature called <span className='variable'>type of</span> which lets us find out the what data type a value is.</p>
        </section>

    </Fragment>
);

export default TypeInference;