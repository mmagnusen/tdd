import React, { Fragment } from 'react';
import { CodeBlock, Command, Helmet, Link  } from '../../../components';
import { NoTests, smoke, BlankSlate, AppTest, TestRenderer, AppSnapshot, AppSnapshotTerminal } from '../../../assets';
import { LINK_TYPE } from '../../../constants'; 

const SnapshotTests = () => (
    <Fragment>
        <Helmet 
            title='Jest Snapshots: JavaScript Testing'
            description='Snapshot tests can help you detect changes in the html structure of your components. Learn more about how they work and how to implement them on your JavaScript project.'
        />
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
        <section className='white-content'>
            <h1>Writing our own snapshot test</h1>
            <p>The final site will look like this:<Link type={LINK_TYPE.EXTERNAL} to='https://romantic-mahavira-837983.netlify.com/'>https://romantic-mahavira-837983.netlify.com/</Link></p>
            <p>Clone this repository: <Link to='https://github.com/mmagnusen/friendlyfaces' type={LINK_TYPE.EXTERNAL}>https://github.com/mmagnusen/friendlyfaces</Link></p>
            <Command>
                npm install
                <br/>
                npm install --save-dev react-test-renderer
            </Command>
            <p><Link type={LINK_TYPE.EXTERNAL} to='https://reactjs.org/docs/test-renderer.html'>React test renderer</Link> is a package which allows you to render React components to pure JavaScript objects.</p>
            <p>This is an example taken from the react-test-renderer documentation:</p>

            <CodeBlock>
{`
const calculateArea = (length = 2, width = 5) => return length * width;
`}
            </CodeBlock>

            <CodeBlock>
            {
`

import TestRenderer from 'react-test-renderer';

function Link(props) {
  return <a href={props.page}>{props.children}</a>;
}

const testRenderer = TestRenderer.create(
  <Link page="https://www.facebook.com/">Facebook</Link>
);

console.log(testRenderer.toJSON());
/*
  { 
    type: 'a',
    props: { href: 'https://www.facebook.com/' },
    children: [ 'Facebook' ] 
  }
*/
`
        }
        </CodeBlock>

            <p>Replace the contents of <span className='variable'>App.test.js</span> with the following:</p>
            <img src={TestRenderer} alt='test renderer screenshot'/>
            <p><Link type={LINK_TYPE.EXTERNAL} to='https://reactjs.org/docs/test-renderer.html#testrenderercreate'>Renderer.create()</Link> is a method which creates an instance of <span className='variable'>testRenderer</span> with the component which is passed to it.</p>
            <p><span className='variable'>toJSON()</span> returns a JSON representation of the rendered tree.</p>
            <Command>
                npm test
            </Command>
            <img src={AppSnapshotTerminal} alt='app terminal snapshot'/>
            <p>We see a new folder called <span className='variable'>__snapshots__</span>, and within it a new file called <span>App.test.jsxAttribute.snap</span>. We did not create this file, it has been automatically generated by Jest.</p>
            <img src={AppSnapshot} alt='app snapshot'/>
            <p>This snapshot file gives us a human readable view of the tree for this component. Each time the snapshot test is run, Jest will compare this snapshot file with the new file generated. If they are the same, the test will pass. If there is any difference, the test will fail.</p>
        </section>
    </Fragment>
);

export default SnapshotTests;
