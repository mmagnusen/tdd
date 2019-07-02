import React, { Component } from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import Blog from '../Blog';
import Intercept from '../Intercept';
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Navigation />
      <div className='main'>
        <Blog />
      </div>
      <Footer />
    </div>
  );
}}

export default App;
