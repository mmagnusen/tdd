import React, { Component } from 'react';
import './Resources.scss';

class Resources extends Component {
    render() {
        return (
            <section className='Resources'>
                <h1>Resources</h1>
                <ul>
                    <li>https://medium.com/@rossbulat/test-driven-development-in-react-with-jest-and-enzyme-2a6cf2cc3071</li>
                    <li>https://medium.com/@rossbulat/testing-in-react-with-jest-and-enzyme-an-introduction-99ce047dfcf8</li>
                    <li>https://wanago.io/2018/09/17/javascript-testing-tutorial-part-four-mocking-api-calls-and-simulating-react-components-interactions/</li>
                    <li> https://github.com/public-apis/public-apis</li>
                    <li>https://www.freecodecamp.org/news/rapid-development-via-mock-apis-e559087be066/</li>
                    <li>https://www.npmjs.com/package/axios-mock-adapter</li>
                    <li>https://codeburst.io/how-to-call-api-in-a-smart-way-2ca572c6fe86</li>
                </ul>
            </section>
        )    
    }
}

export default Resources;