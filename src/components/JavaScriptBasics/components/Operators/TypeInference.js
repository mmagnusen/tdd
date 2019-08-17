import React, { Fragment } from 'react';
import { Gist, Helmet } from '../../../../components/';

const TypeInference = () => (
    <Fragment>
        <Helmet 
            title='JavaScript type inference'
            description='Learn what type inference is and how the JavaScript compiler uses it to interpret and execute your code.'
        />
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
            <p>Let us use this to find out the data type of <span className='variable'>name</span> and <span className='variable'>age</span></p>
            <Gist id='5d24c42ecddde7e949bdf76446369e6a'/>

            <p>We can see that the data type of 'name' is a string and the data type of 'age' is a number.</p>

            <p>Now let us look at another example. What would you expect the output to be here?:</p>
            <Gist id='/503a73c9d4629197ea205ac021a7f92e'/>
            <ol>
                <li><span>An error. You cannot subtract a string from a number</span></li>
                <li><span>15</span></li>
            </ol>
            
            <p>The correct answer is 15. Strictly speaking, you cannot subtract a string from a number. But the compiler is reading the code and has inferred that in this scenario, <span className='variable'>lengthTwo</span> should be treated as a number when carrying out the calculation.</p>

            <p>Let us look at another example</p>
            <Gist id='/4663d58820752a845fc10e82c945af12'/>
            <p>What do you expect the output to be here?</p>
            <ol>
                <li><span>15</span>: the compiler will infer that 'lengthTwo' should be a number.</li>
                <li><span>An error</span>: you cannot add a string to a number </li>
                <li><span>'105'</span>: the compiler will infer that because it is an addition, you are trying to join two strings </li>
            </ol>
        
            <p>The correct answer is '105'. The compiler has interpreted that if we are adding a string to a number, we are trying to join two strings.</p>

            <p>It is important to remember that type inference is always at play. This will help you if the value of an output is not what you expected.</p>
        </section>

    </Fragment>
);

export default TypeInference;