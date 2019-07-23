import React, { Fragment } from 'react';
import { Link, Command } from '../../';
import { LINK_TYPE } from '../../../constants';
import { PackageInit, PackageInitJson } from '../../../assets';

const AddSass = () => (
    <Fragment>
        <section className='white-content'>
            <h1>How to add Sass to a vanilla project</h1>
            <p>You can view a boilerplate template here: <Link type={LINK_TYPE.EXTERNAL} to='https://github.com/mmagnusen/boilerplate'>https://github.com/mmagnusen/boilerplate</Link></p>
        </section>

        <section className='white-content'>
            <h1>What is Sass?</h1>
            <p>Sass (Syntactically Awesome Sylesheet) is a CSS preprocessor. It makes it easier to create styles by reducing the amount of repetition in your code.</p>
        </section>

        <section className='white-content'>
            <h1>Install Sass</h1>
            <p>Pre-requisites:</p>

            <ul>
                <li>Node >= 8.10</li>
                <li>npm >= 5.6</li>
            </ul>
            <p>Create a package.json file by navigating to the root of the project, then run</p>
            <Command>
                npm init
            </Command>

            <p>You will be asked a series on questions to initialise your package.json file. Hit enter at each question to accept the default</p>

            <img src={PackageInit} alt='npm init to create package.json file'/>

            <p>You should be able to see a new package.json file that looks like this:</p>

            <img src={PackageInitJson} alt='npm init to create package.json file'/>

            <p>We now need to install Sass:</p>
            <Command>
                npm install --save-dev sass
            </Command>
        </section>

        <section className='white-content'>
            <h1>First Compile</h1>
            <p>Let's try the next command. This will take all the styles within the <span className='variable'>styles.scss</span> file, convert it to regular css and place it in a file called <span className='variable'>styles.css</span>:</p>
            <Command>
                sass styles.scss styles.css
            </Command>

            <p>You can also compile an entire folder. If you have a folder called SassStyles and want to compile that to a folder called CssStyles, you can do so by running:</p>
            <Command>
                sass SassStyles:CssStyles
            </Command>
        </section>
        
        <section className='white-content'>
            <h1>Continuous Watch</h1>
            <p>If you're making multiple changes to your styles, it's better for sass to watch for changes and automatically compile each time you make a change to your css file.</p>
            <Command>
            sass --watch styles.scss styles.css
            </Command>

            <p>You can also watch an entire folder by running:</p>
            <Command>
            sass --watch SassStyles:CssStyles
            </Command>
        </section>
    </Fragment>
);
export default AddSass;