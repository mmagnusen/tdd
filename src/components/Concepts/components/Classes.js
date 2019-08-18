import React, { Fragment } from 'react';
import { CodeBlock, Helmet } from '../../../components';
import { inherited } from '../../../assets';

const Class = () => (
    <Fragment>
        <Helmet 
            title='JavaScript Classes'
            description='Understand Classes in JavaScript and learn about Class inheritance.'
        />
        <section className='white-content'>
            <h1>What is a class?</h1>
            <p>We create a class with the <span className='variable'>class</span> keyword.</p>
            <p>What data type is a <span className='variable'>class</span>? We can do a simple test to verify this.</p>
            <CodeBlock>
                {
                    `
                        class Person {

                        }

                        console.log(typeof Person)
                                
                        //function
                    `
                }
            </CodeBlock>
            
            <p>We see in the console that the type is a <span className='variable'>function</span>.</p>
            <p>A class is a function which enables you to create objects. These objects can share similar traits.</p>
            <p>One way is to think of this <span className='variable'>function</span> is an ice tray. You can make as many ice cubes as you want with just one tray.</p>
            <p>Each time you use the tray to make more cubes, you create a new object. We say we are creating a new <span className='variable'>instance</span> of that class. Each ice cube is a new <span>instance</span>.</p>
        </section>
        <section className='white-content'>
            <h1>Creating a new instance</h1>
            <p>We create a new instance of a <span className='variable'>class</span> by using the <span className='variable'>new</span> keyword.</p>
            
            
            <CodeBlock>
                {
                    `
                        class Person {

                        }

                        const Marilyn = new Person();
                        const Davina = new Person();
                        const Judy = new Person();

                        console.log('typeof Marilyn', typeof Marilyn );
                        //typeof Marilyn object
                    `
                }
            </CodeBlock>

            <p>We see from the console log that each time we create a new instance of a class, we are creating a new <span className='variable'>object</span>.</p>

         </section>
        <section className='white-content'>
            <h1>Constructor</h1>
            <p><span className='variable'>Classes</span> can have attributes. These attributes can be anything. The only thing a <span className='variable'>class</span> MUST have is a constructor.</p> 
            <p>A constructor is a <span className='variable'>method</span>, which is called automatically every time a new instance of that <span className='variable'>class</span> is created.</p>
            <p>When we think of a person, we think of attributes like name and hair color. Let's give our <span className='variable'>Person</span> these attributes.</p>
            <CodeBlock>
                {
                    `
                    class Person {
                        constructor() {
                        this.name = 'Marilyn';
                        this.hairColor = 'brown';
                        }
                    }
                    
                    const anonymousPerson = new Person();
                    `
                }
            </CodeBlock>
            
            <h4>How to access attributes</h4>
            <p>We know that each new instance of a <span className='variable'>class</span> is an <span className='variable'>object</span>. So each attribute we have given our <span className='variable'>Person</span> is actually a key, with a value. The key is 'name' and the value is 'Marilyn'.</p>
            <p>To access these attributes, we do so in the same way you would to access a key:value pair for an object- using object notation.</p>
            <p>To access the name attribute of our <span className='variable'>anonymousPerson</span>, we would write:</p>
            <CodeBlock>
                {
                    `
                    class Person {
                        constructor() {
                            this.name = 'Marilyn';
                            this.hairColor = 'brown';
                        }
                    }

                    const anonymousPerson = new Person();

                    console.log(anonymousPerson.name);
                    //Marilyn
                    `
                }
            </CodeBlock>
            <p>If we create more instances of a <span className='variable'>class</span>, do they all share the same attributes? Let's check:</p>
            <CodeBlock>
            {
                `
                    class Person {
                        constructor() {
                            this.name = 'Marilyn';
                            this.hairColor = 'brown';
                        }
                    }

                    const anonymousPerson = new Person();
                    const Marilyn = new Person();
                    const Davina = new Person();
                    const Judy = new Person();

                    console.log(anonymousPerson.name, Marilyn.name, Davina.name, Judy.name);
                    //Marilyn Marilyn Marilyn Marilyn
                `
            }
        </CodeBlock>
            <p>But what if we want the value of name to be different for every new instance of a <span className='variable'>class</span>? This is where the constructor comes in.</p>
            <p>A constructor defines which parameters the class is expecting, and how those values will be used within the <span className='variable'>class</span>.</p>

            <CodeBlock>
                {
                    `
                    class Person {
                        constructor(name, hairColor) {
                            this.name = name;
                            this.hairColor = hairColor;
                        }
                    }

                    const anonymousPerson = new Person('who knows?');
                    const Marilyn = new Person('Marilyn the Great');
                    const Davina = new Person('Davina the Fearless');
                    const Judy = new Person('Judy the Wise');

                    //who knows? Marilyn the Great Davina the Fearless Judy the Wise
                    `
                }
            </CodeBlock>

            <h4>Default Values</h4>
            <p>To pass a default value in a regular function, we would use the <span className='variable'>assignment operator</span> and write something like this:</p>
            <CodeBlock>
                {
                `
                    const calculateArea = (length = 2, width = 5) => return length * width;
                `
                }
            </CodeBlock>
            <p>As a <span className='variable'>class</span> is also a function, we can do the same thing:</p>
            <CodeBlock>
                {
                    `
                        class Person {
                            constructor(name = 'Marilyn', hairColor = 'blue') {
                                this.name = name;
                                this.hairColor = hairColor;
                            }
                        }

                        const anonymousPerson = new Person('who knows?', 'brown');
                        const Marilyn = new Person('Marilyn the Great', 'grey');
                        const Davina = new Person('Davina the Fearless');
                        const Judy = new Person('Judy the Wise');

                        console.log(anonymousPerson.hairColor, Marilyn.hairColor, Davina.hairColor, Judy.hairColor);

                        //brown grey blue blue
                    `
                }
            </CodeBlock>

            <p>'Blue' is the default hair color. When we created 'anonymousPerson' and 'Marilyn', we passed in the arguments for <span className='variable'>hairColor</span> so they have been used by the class when creating the object.</p>
            <p>'Davina' and 'Judy' were not passed arguments for hairColor, so the defaults have been used.</p>
        </section>

        <section className='white-content'>
            <h1>Methods</h1>
            <p>A method is what we call a function, when it is a property of a class:</p>
            <CodeBlock>
                {
                    `
                        class Person {
                            constructor(name = 'Marilyn', hairColor = 'blue') {
                                this.name = name;
                                this.hairColor = hairColor;
                            }

                            eat(foodItem) {
                                console.log(this.name, 'is eating', foodItem)
                            }
                        }


                        const anoymousPerson = new Person()

                        anoymousPerson.eat('Jollof');

                        //Marilyn is eating Jollof
                    `
                }
            </CodeBlock>
        </section>

        <section className='white-content'>
            <h1>Inheritance</h1>
            <p>To make <span className='variable'>classes</span> reusable, we can create new classes which have the same properties of another class.</p>
            <p>To create a class which inherits the attributes of another class, we use the <span className='varibale'>extend</span> keyword.</p>
            <CodeBlock>
                {
                    `
                    class Person {
                        constructor(name = 'Marilyn', hairColor = 'blue') {
                            this.name = name;
                            this.hairColor = hairColor;
                        }
                    }

                    class Athlete extends Person {
                        
                    }

                    const anonymousPerson = new Person('who knows?', 'brown');
                    const Marilyn = new Person('Marilyn the Great', 'grey');
                    const Davina = new Person('Davina the Fearless');
                    const Judy = new Person('Judy the Wise');

                    const Mo = new Athlete();

                    console.log(Mo.name, Mo.hairColor);
                    //Marilyn blue
                    `
                }
            </CodeBlock>
            <p>We can see here that our new <span className='variable'>class</span> <span className='variable'>Athlete</span> inherits from the <span className='variable'>Person</span> <span>class</span>.</p>
            <p><span className='variable'>Mo</span>, which is an instance of <span className='variable'>Athlete</span>, which itself inherits from <span className='variable'>Person</span>, has all the attributes of the <span className='variable'>Person</span> class.</p>
            
            <h4>super()</h4>
            <p>How do we give our new class attributes which the parent does not have?</p>
            <p>In our first class, we simply used the this keyword to give our class attributes. Let's try the same with the child class:</p>
            <CodeBlock>
                {
                    `
                    class Person {
                        constructor(name = 'Marilyn', hairColor = 'blue') {
                            this.name = name;
                            this.hairColor = hairColor;
                        }
                    }

                    class Athlete extends Person {
                        constructor() {
                            this.height = 10;
                        }
                    }

                    const Mo = new Athlete();

                    console.log(Mo.height);
                    `
                }
            </CodeBlock>
            <p>When we run this code, we get the following error:</p>

            <img src={inherited} alt='inherited class error'/>
            
            <p><span className='variable'>super</span> must be called before you can access <span className='variable'>this</span> on the child class.</p>
        </section>

        <section className='white-content'>
            <h1>Static Methods</h1>
            <p>A <span className='variable'>static method</span> is a method which can only be called on the class itself, not by any of its instances.</p>
            <CodeBlock>
                {
                    `
                    class Person {
                        constructor(name = 'Marilyn', hairColor = 'blue') {
                            this.name = name;
                            this.hairColor = hairColor;
                        }

                        static eat(foodItem) {
                            console.log(this.name, 'is eating', foodItem)
                        }
                    }


                    const anoymousPerson = new Person()

                    Person.eat('Jollof');
                    //Person is eating Jolloff

                    anoymousPerson.eat()
                    //TypeError: anoymousPerson.eat is not a function
                    `
                }
            </CodeBlock>
        </section>
    </Fragment>
);

export default Class;
