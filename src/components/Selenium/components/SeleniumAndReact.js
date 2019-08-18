import React, { Fragment } from 'react';
import { Link, Command, CodeBlock } from '../../../components';
import { LINK_TYPE } from '../../../constants';

const SeleniumAndReact = () => (
    <Fragment>
        <section className='white-content'>
            <h1>Testing React applications with Selenium</h1>
            <p>Create new site for testing:</p>
            <Command>
                create-react-app authentication
                <br/>
                cd authentication
                <br/>
                npm start
            </Command>
            <p>The site will be available at <Link type={LINK_TYPE.EXTERNAL} to='http://localhost:3000'>http://localhost:3000</Link></p>
        </section>
        <section className='white-content'>
            <p>Install our npm packages:</p>
            <Link type={LINK_TYPE.EXTERNAL} to='https://www.npmjs.com/package/selenium-webdriver'>https://www.npmjs.com/package/selenium-webdriver</Link>
            <Command>
                npm install --save-dev selenium-webdriver geckodriver chromedriver
            </Command>
            <p>If you're on a Mac, you should have safari driver installed by default. You can test this by typing this into your terminal:</p>
            <Command>
                safaridriver --version
            </Command>
            <p>This should give you the output:</p>
            <p className='variable'>Included with Safari 12.1 (12607.1.40.1.5)</p>
        </section>
        <section className='white-content'>
            <h1>Writing our first test</h1>
            <p>Create a file called <span className='variable'>seleniumTest.js</span> within the <span className='variable'>src</span> folder of your project.</p>
            <p>Paste in the following:</p>
            <CodeBlock>
            {`
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 8000);
    } finally {
    await driver.quit();
    }
})();
            
            `}
                                    
                    </CodeBlock>

            <p>Let us now run the test:</p>
            <p>In the terminal, navigate to the src folder of your project. Type in:</p>
            <Command>
                node seleniumTest.js
            </Command>
            <p>We have successfully created and run our first Selenium test!</p>
        </section>
    </Fragment>
);

export default SeleniumAndReact;
