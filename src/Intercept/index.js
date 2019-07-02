import React, { Component } from 'react';
import API from '../API'

class Intercept extends Component {

    makeInterceptRequest = () => {
        const myApi = new API()
        myApi.createEntity({name: 'posts'})
        myApi.endpoints.posts.getPosts('')
        .then(response => {
            console.log('response', response)
            this.setState({
                results: response.data
            })
        })
    }

  render() {
  return (
    <div className="Intercept">
        <button onClick={this.makeInterceptRequest}>Make Request</button>
    </div>
  );
}}

export default Intercept;
