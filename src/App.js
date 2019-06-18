import React, { Component } from 'react';
import Navigation from './Navigation'
import Footer from './Footer'
import Songs from './Blog'
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Navigation />
      <div className='main'>
      <Songs />
      </div>
      <Footer />
    </div>
  );
}}

export default App;
