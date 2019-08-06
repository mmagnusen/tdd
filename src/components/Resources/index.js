import React, { Fragment }  from 'react';
import { Link, Helmet } from '../index';
import { LINK_TYPE } from '../../constants/'
import './Resources.scss';

const Resources = () => (
    <Fragment>
    <Helmet title='JavaScript Front-end Testing Resources'/>
    <section className='Resources'>
        <section className='container'>
                <section className='white-content'>
                    <h3>General Testing</h3>
                    <ul>
                        <li><Link type={LINK_TYPE.EXTERNAL} to='https://codeburst.io/beginning-javascript-testing-part-1-42d72ac1c7d1'>https://codeburst.io/beginning-javascript-testing-part-1-42d72ac1c7d1</Link></li>
                        <li><Link type={LINK_TYPE.EXTERNAL} to='https://reactjs.org/docs/test-renderer.html'>https://reactjs.org/docs/test-renderer.html</Link></li>
                    </ul>
                </section>

                <section className='white-content'>
                    <h3>Generally helpful for beginners</h3>
                    <ul>
                        <li>
                            <Link type={LINK_TYPE.EXTERNAL} to='https://github.com/public-apis/public-apis'> 
                                https://github.com/public-apis/public-apis
                            </Link>
                        </li>
                        <li>
                        <Link type={LINK_TYPE.EXTERNAL} to='https://picsum.photos/'> 
                            https://picsum.photos/
                        </Link>
                        </li>
                        <li>
                            <Link type={LINK_TYPE.EXTERNAL} to='https://codeburst.io/how-to-call-api-in-a-smart-way-2ca572c6fe86'>
                                https://codeburst.io/how-to-call-api-in-a-smart-way-2ca572c6fe86
                            </Link>
                        </li>
                    </ul>
                </section>

                <section className='white-content'>
                <h3>Jest</h3>
                    <ul>
                        <li>
                            <Link type={LINK_TYPE.EXTERNAL} to='https://medium.com/@rossbulat/test-driven-development-in-react-with-jest-and-enzyme-2a6cf2cc3071'>
                                https://medium.com/@rossbulat/test-driven-development-in-react-with-jest-and-enzyme-2a6cf2cc3071
                            </Link>
                        </li>
                        <li>
                            <Link type={LINK_TYPE.EXTERNAL} to='https://medium.com/@rossbulat/testing-in-react-with-jest-and-enzyme-an-introduction-99ce047dfcf8'>
                                https://medium.com/@rossbulat/testing-in-react-with-jest-and-enzyme-an-introduction-99ce047dfcf8
                            </Link>
                        </li>
                        <li>
                            <Link type={LINK_TYPE.EXTERNAL} to='https://wanago.io/2018/09/17/javascript-testing-tutorial-part-four-mocking-api-calls-and-simulating-react-components-interactions/'>
                                https://wanago.io/2018/09/17/javascript-testing-tutorial-part-four-mocking-api-calls-and-simulating-react-components-interactions/
                            </Link>
                        </li>
                        <li>
                            <Link type={LINK_TYPE.EXTERNAL} to='https://www.freecodecamp.org/news/rapid-development-via-mock-apis-e559087be066/'>
                                https://www.freecodecamp.org/news/rapid-development-via-mock-apis-e559087be066/
                            </Link>
                        </li>
                        <li>
                            <Link type={LINK_TYPE.EXTERNAL} to='https://www.npmjs.com/package/axios-mock-adapter'>
                                https://www.npmjs.com/package/axios-mock-adapter
                            </Link>
                        </li>
                    </ul>
                </section>

                <section className='white-content'>
                    <h3>Selenium</h3>
                    <ul>
                        <li>
                            <Link type={LINK_TYPE.EXTERNAL} to='https://www.guru99.com/introduction-to-selenium.html'>
                            https://www.guru99.com/introduction-to-selenium.html
                            </Link>
                        </li>
                    </ul>
                </section>

                <section className='white-content'>
                    <h3>Git Repositories</h3>
                    <ul>
                        <li>
                            <Link type={LINK_TYPE.EXTERNAL} to='https://github.com/mmagnusen/classy'>
                            https://github.com/mmagnusen/classy
                            </Link>
                        </li>
                        <li>
                        <Link type={LINK_TYPE.EXTERNAL} to='https://github.com/mmagnusen/calculator/blob/master/src/calculator.test.js'>
                            https://github.com/mmagnusen/calculator/blob/master/src/calculator.test.js
                        </Link>
                        </li>
                        <li>
                        <Link type={LINK_TYPE.EXTERNAL} to='https://github.com/mmagnusen/boilerplate'>
                            https://github.com/mmagnusen/boilerplate
                        </Link>
                    </li>
                        <li>
                            <p><Link type={LINK_TYPE.EXTERNAL} to='https://github.com/mmagnusen/friendlyfaces'>
                                https://github.com/mmagnusen/friendlyfaces
                                
                            </Link>,
                            live project:
                            <Link type={LINK_TYPE.EXTERNAL} to='https://romantic-mahavira-837983.netlify.com/'>https://romantic-mahavira-837983.netlify.com/</Link>
                            </p>
                        </li>
                    </ul>
                </section>

        </section>
    </section>
    </Fragment>
);

export default Resources;