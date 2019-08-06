import React, { Fragment } from 'react';
import { Gist, CodeBlock, Helmet } from '../../../components';
import { inherited } from '../../../assets';

const Class = () => (
    <Fragment>
        <Helmet title='JavaScript Classes '/>
        <section className='white-content'>
            <h1>What is a class?</h1>
            <p>We create a class with the <span className='variable'>class</span> keyword.</p>
            <p>What data type is a <span className='variable'>class</span>? We can do a simple test to verify this.</p>
            <Gist id='7199d0607eaac1a6501076e9539d3baa' />
            <p>We see in the console that the type is a <span className='variable'>function</span>.</p>
            <p>A class is a function which enables you to create objects. These objects can share similar traits.</p>
            <p>One way is to think of this <span className='variable'>function</span> is an ice tray. You can make as many ice cubes as you want with just one tray.</p>
            <p>Each time you use the tray to make more cubes, you create a new object. We say we are creating a new <span className='variable'>instance</span> of that class. Each ice cube is a new <span>instance</span>.</p>
        </section>
        <section className='white-content'>
            <h1>Creating a new instance</h1>
            <p>We create a new instance of a <span className='variable'>class</span> by using the <span className='variable'>new</span> keyword.</p>
            <Gist id='a5ed748f222974af380d8711d3f40a5d'/>
            <p>We see from the console log that each time we create a new instance of a class, we are creating a new <span className='variable'>object</span>.</p>

         </section>
        <section className='white-content'>
            <h1>Constructor</h1>
            <p><span className='variable'>Classes</span> can have attributes. These attributes can be anything. The only thing a <span className='variable'>class</span> MUST have is a constructor.</p> 
            <p>A constructor is a <span className='variable'>method</span>, which is called automatically every time a new instance of that <span className='variable'>class</span> is created.</p>
            <p>When we think of a person, we think of attributes like name and hair color. Let's give our <span className='variable'>Person</span> these attributes.</p>
            <Gist id='3c43343ca73a615f3d4af4d82374c7d8' />
            
            <h4>How to access attributes</h4>
            <p>We know that each new instance of a <span className='variable'>class</span> is an <span className='variable'>object</span>. So each attribute we have given our <span className='variable'>Person</span> is actually a key, with a value. The key is 'name' and the value is 'Marilyn'.</p>
            <p>To access these attributes, we do so in the same way you would to access a key:value pair for an object- using object notation.</p>
            <p>To access the name attribute of our <span className='variable'>anonymousPerson</span>, we would write:</p>
            <Gist id='10728d54a39cf0da9bcabbf1f193f952' />
            <p>If we create more instances of a <span className='variable'>class</span>, do they all share the same attributes? Let's check:</p>
            <Gist id='a9942404288752d1cecd349ecf87fef4' />
            <p>But what if we want the value of name to be different for every new instance of a <span className='variable'>class</span>? This is where the constructor comes in.</p>
            <p>A constructor defines which parameters the class is expecting, and how those values will be used within the <span className='variable'>class</span>.</p>
            <Gist id='d0696661e9ce1276706a670420d7dde2' />

            <h4>Default Values</h4>
            <p>To pass a default value in a regular function, we would use the <span className='variable'>assignment operator</span> and write something like this:</p>
            <CodeBlock>
                const calculateArea = (length = 2, width = 5) => return length * width;
            </CodeBlock>
            <p>As a <span className='variable'>class</span> is also a function, we can do the same thing:</p>
            <Gist id='6c710c9ec32fa3e2fb521ec2bb9d7264' />
            <p>'Blue' is the default hair color. When we created 'anonymousPerson' and 'Marilyn', we passed in the arguments for <span className='variable'>hairColor</span> so they have been used by the class when creating the object.</p>
            <p>'Davina' and 'Judy' were not passed arguments for hairColor, so the defaults have been used.</p>
        </section>

        <section className='white-content'>
            <h1>Methods</h1>
            <p>A method is what we call a function, when it is a property of a class:</p>
            <Gist id='dd60590386c3f3583865aef44ce5536c' />
        </section>

        <section className='white-content'>
            <h1>Inheritance</h1>
            <p>To make <span className='variable'>classes</span> reusable, we can create new classes which have the same properties of another class.</p>
            <p>To create a class which inherits the attributes of another class, we use the <span className='varibale'>extend</span> keyword.</p>
            <Gist id='eb0f53796f0acbbdbde096877d0a36ff' />
            <p>We can see here that our new <span className='variable'>class</span> <span className='variable'>Athlete</span> inherits from the <span className='variable'>Person</span> <span>class</span>.</p>
            <p><span className='variable'>Mo</span>, which is an instance of <span className='variable'>Athlete</span>, which itself inherits from <span className='variable'>Person</span>, has all the attributes of the <span className='variable'>Person</span> class.</p>
            
            <h4>super()</h4>
            <p>How do we give our new class attributes which the parent does not have?</p>
            <p>In our first class, we simply used the this keyword to give our class attributes. Let's try the same with the child class:</p>
            <Gist id='517b7afcc811ef963bcc55f0dffe99b7' />
            <p>When we run this code, we get the following error:</p>

            <img src={inherited} alt='inherited class error'/>
            
            <p><span className='variable'>super</span> must be called before you can access <span className='variable'>this</span> on the child class.</p>
        </section>

        <section className='white-content'>
            <h1>Static Methods</h1>
            <p>A <span className='variable'>static method</span> is a method which can only be called on the class itself, not by any of its instances.</p>
            <Gist id='be493d27e3d59520e4c7acc84a673f1a' />
        </section>
    </Fragment>
);

export default Class;
