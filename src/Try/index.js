import React, { Component } from 'react';
import API from '../API'

class Try extends Component {
    state = {
        randomNumber: 100,
        multiplier: null
    }

    calculate = () => {
        try {
           this.setState({
            multiplier: 5
           })
        }
        finally {
            console.log('finally statement');
        }
    }



  render() {
    const { randomNumber, multiplier } = this.state;
    const { onClick } = this.props
    return (
    <div className="Intercept">
        <h1 className='fudge'>Random Number: {randomNumber}</h1>
        {multiplier && <h1 className='fudge'>Multiplier: {multiplier}</h1>}
        {multiplier && <h1 className='fudge'>Result: {randomNumber * multiplier}</h1>}
        <button onClick={this.calculate} id='calculate'>Try me</button>
        
    </div>
  );
}}

export default Try;
