import React, { Fragment } from 'react';
import { Link, Command } from '../../../components';
import { ChromeDriver, ChromeIndex } from '../../../assets'
import { LINK_TYPE } from '../../../constants';

const SeleniumAndReact = () => (
    <Fragment>
        <section className='white-content'>
            <h1>Testing React applications with Selenium</h1>
            <p>Install npm package for Selenium:</p>
            <Link type={LINK_TYPE.EXTERNAL} to='https://www.npmjs.com/package/selenium-webdriver'>https://www.npmjs.com/package/selenium-webdriver</Link>
            <Command>
                npm install selenium-webdriver
            </Command>
        </section>
        <section className='white-content'>
            <h1>Installing webdrivers</h1>
            <p>We will need to install a driver for each of the major browsers we want to test with.</p>
            <p>You should already have Chrome installed. We now need to install the Chromdriver. Go to <Link type={LINK_TYPE.EXTERNAL} to='https://sites.google.com/a/chromium.org/chromedriver/downloads'>https://sites.google.com/a/chromium.org/chromedriver/downloads</Link>, where you will find the following options for the download:</p>
            <img src={ChromeDriver} alt='Chrome Driver'/>
            <p>Click on the appropriate Chromedriver for the version of Chrome you currently have installed. You will then be directed to a page which looks something like this:</p>
            <img src={ChromeIndex} alt='Chrome download options'/>
            <p>Click on the appropriate option for the operating system you are on, and the download of the ZIP file will begin.</p>
            <p>When the download is complete, you should go to your downloads folder, find the file and double-click on it to unzip it.</p>
            <p>Navigate to your downloads folder within your terminal. Type in the following command:</p>
            <Command>
                mv chromedriver /usr/local/bin
            </Command>
        </section>
    </Fragment>
);

export default SeleniumAndReact;
