import React, { Component } from 'react';
import './Enzyme.scss';

class Enzyme extends Component {
    render() {
        return (
            <div className='Enzyme'>
                <div className='container'>  
                    <h1>Enzyme</h1>
                    <section className='white-content'>
                    <h1>What is Jest?</h1>
                    <p>Comes pre-installed in every create-react-app application</p>
                </section>
                </div>
            </div>
        )
    }
}

export default Enzyme;