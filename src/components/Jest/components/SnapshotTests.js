import React, { Fragment } from 'react';
import { Command, Link } from '../../../components';
import { NoTests, smoke, BlankSlate, AppTest } from '../../../assets';
import { LINK_TYPE } from '../../../constants'; 

const SnapshotTests = () => (
    <Fragment>
        <section className='white-content'>
            <h1>What are snapshot tests?</h1>
            <p>Snapshots tests are tests which tells you if the html structure of your component has changed.</p>
            <p>They are useful for checking if changes made to code has changed how a component renders. For example, if you refactor your code and find that a snapshot test fails, this lets you know that your refactor has changed the appearance of the component.</p>
            <p>They can:</p>
            <ul>
                <li>detect html elements which are added or removed</li>
                <li>detect classes and IDs added to or removed from html elements</li>
            </ul>
            <p>They cannot:</p>
            <ul>
                <li>Detect changes made to styles within CSS files</li>
            </ul>
        </section>
        <section className='white-content'>
            <h1>Our first snapshot test</h1>
            <p>Pre-requisites:</p>
            <ul>
                <li>Node >= 8.10</li> 
                <li>npm >= 5.6</li>
            </ul>
            <Command>
                npm install -g create-react-app
                <br/>
                create-react-app my-app
                <br/>
                cd my-app
                <br/>
                npm start
            </Command>
            <p>The site will be available at <Link type={LINK_TYPE.EXTERNAL} to='http://localhost:3000'>http://localhost:3000</Link></p>
            <p>This is what our project folder tree currently looks like:</p>
            <img src={BlankSlate} alt='skeleton create react app'/>
            <img src={AppTest} alt='app test file'/>
            <p>We have a single component in <span className='variable'>App.js</span>, which shows the loading screen on the homepage.</p>
            <p>There is also a file called <span className='variable'>App.test.js</span>, which contains a test for the <span>App</span></p>
            <p>We call this type of test a 'smokescreen', because it simply checks that the component renders.</p>
            <p>Type the following in your terminal:</p>
            <Command>
                npm test
            </Command>
            <p>We are shown this in the terminal, which is a notification that no new tests have been found:</p>
            <img src={NoTests} alt='run test'/>
            <p>Hit 'a' in your terminal</p>
            <Command>
                a
            </Command>
            <p>We will see the result of our test being run:</p>
            <img src={smoke} alt='smoke test in terminal'/>
            <p>This informs us that the <span>{`<App/>`}</span> component was mounted without crashing.</p>
        </section>
    </Fragment>
);

export default SnapshotTests;
