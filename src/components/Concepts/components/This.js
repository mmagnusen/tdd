import React, { Fragment } from 'react';
import { CodeBlock, Command, Helmet, Link } from '../../../components';
import { ThisWindow, ThisEventHandler } from '../../../assets';
import { LINK_TYPE } from '../../../constants/';

const This = () => (
    <Fragment>
        <Helmet 
            title='This in JavaScript'
            description='What is "this" in JavaScript? How does "this" change in different circumstances?'
        />
        <section className='white-content'>
            <h1>What is this?</h1>
            <p><span className='variable'>This</span> always refers to and holds the value of an <span className='variable'>object</span>.</p>
        </section>

        <section className='white-content'>
            <h1>In the browser</h1>
            <Command>
                console.log(this);
            </Command>

            <img src={ThisWindow} alt='this in browser window' />
            <p>From the browser, <span className='variable'>this</span> refers to the  <span className='variable'>window</span> object.</p>
        </section>

        <section className='white-content'>
            <h1>'This' in Methods</h1>
            <p>From a method, <span className='variable'>this</span> refers to the instance of object which has been created.</p>
            <CodeBlock>
                {
                    `
                        class Person {
                            constructor(name = 'Marilyn') {
                                this.name = name;
                            }

                            greeting() {
                                console.log('hello', this.name);
                            }
                        }

                        const anonymousPerson = new Person();

                        const personOne = new Person('Davina'); 

                        anonymousPerson.greeting();
                        personOne.greeting();

                        //hello Marilyn
                        //hello Davina
                    `
                }
            </CodeBlock>
        </section>

        <section className='white-content'>
            <h1>'This' in Functions</h1>
            <p>From a function, <span className='variable'>this</span> refers to the value of the object that invoked the function. In the example below, we are runnning our script using Node.js. Scripts run using Node have an object called <Link type={LINK_TYPE.EXTERNAL} to='https://nodejs.org/api/globals.html#globals_global'>global</Link> as their global object.</p>
            <CodeBlock>
                {
                    `
                    const bakeCake = () => {
                        return this;
                    }

                    const tastyCake = bakeCake(); 

                    console.log(tastyCake);

                    //{}
                    `
                }
            </CodeBlock>
        </section>

        <section className='white-content'>
            <h1>'This' in event handlers</h1>
            <p>In event handlers, <span className='variable'>this</span> refers to the value of the element which fired the event.</p>
            <p>This element can be an html element such as a button, an anchor link etc</p>
            <p>Consider this React component</p>
            <CodeBlock>
                {
                    `
                        import React, { Component } from 'react';

                        class App extends Component {

                        handleClick = () => {
                            console.log(this)
                        }

                        render() {

                            const { profiles } = this.state;

                            return (
                            <div className="App">
                                <button onClick={(event) => this.handleClick(event)}>What is this?</button>
                            </div>
                            )};
                        }

                        export default App;
                    `
                }
            </CodeBlock>

            <img src={ThisEventHandler}  alt='event handler React.js'/>
            <p>This refers to <span className='App'>App</span>, which is the dom element which fired the event.</p>
        </section>

        <section className='white-content'>
            <h1>Call, Bind and Apply</h1>
            <p><span className='variable'>Call</span>, <span className='variable'>bind</span> and <span className='variable'>apply</span>are JavaScript methods.</p>

            <h4>Bind</h4>
            <p>We have already been using the bind method in our examples.</p>
            <p>In the example below, we bind 'name' to the instance of the object which is created. This is called implicit binding.</p>
            <CodeBlock>
                {
                    `
                        class Animal {
                            constructor(name) {
                            this.name = name;
                            }
                        }
                        
                        const belovedPet = new Animal('Crookshanks');
                        
                        console.log(belovedPet.name);
                        //Crookshanks
                    `
                }
            </CodeBlock>

            <p>We can bind explicitly by using the <span className='variable'>bind</span> keyword</p>
            <CodeBlock>
                {
                    `
                        var myHouse = function () { 
                            console.log(this.carpetColor);
                        };
                        
                        var roomOne = {
                            carpetColor: 'grey'
                        };
                        
                        var roomTwo = {
                            carpetColor: 'cream'
                        };

                        myHouse.bind(roomOne);

                        // at this point, myHouse is bound to roomOne but the function is not invoked.
                    `
                }
            </CodeBlock>

            <p>In the example given above, at the point of line 14, <span>myHouse</span> is bound to roomOne but the function is not invoked. Nothing will be logged to the console.</p>
            
            <h4>Call</h4>
            <p>Call allows you to specify the context of <span className='variable'>this</span>, and immediately invokes that function.</p>
            <CodeBlock>
                {
                    `
                        var myHouse = function () { 
                            console.log(this.carpetColor);
                        };
                        
                        var roomOne = {
                            carpetColor: 'grey'
                        };
                        
                        var roomTwo = {
                            carpetColor: 'cream'
                        };

                        myHouse.call(roomOne);
                        //grey
                    `
                }
            </CodeBlock>

            <h4>Apply</h4>
            <p>Apply works in the same way as <span>call</span>.</p>
            <p>The difference between <span className='variable'>call</span> and <span className='variable'>apply</span> is that <span className='variable'>call</span> will accept the first agument to be the context, then the rest of the expected arguments to be passed one by one</p>
            <p><span className='variable'>Apply</span> expects the first argument to be the context, then the second argument will be an array of the expected arguments.</p>
            <CodeBlock>
                {
                    `
                        var myHouse = function (length, width) { 
                            console.log(this.carpetColor);
                        };
                        
                        var roomOne = {
                            carpetColor: 'grey'
                        };

                        myHouse.call(roomOne, 2, 4);
                        myHouse.apply(roomOne, [3, 6])

                        //grey grey
                    `
                }
            </CodeBlock>
        </section>
    </Fragment>
);

export default This;
