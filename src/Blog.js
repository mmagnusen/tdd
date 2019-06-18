import React, { Component } from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
import './App.css';

class Blog extends Component {
    state = {
        results: []
    }

    componentDidMount = () => {
        this.getPosts()
    
    }

    getPosts = () => {
        axios.get('https://public-api.wordpress.com/wp/v2/sites/clearli.wordpress.com/posts/')
        .then(response => {
            console.log('real response', response.data)
            this.setState({
                results: response.data
            })
        })
    }
    applyMock = () => {

        var mock = new MockAdapter(axios);

        mock.onGet('https://public-api.wordpress.com/wp/v2/sites/clearli.wordpress.com/posts/').reply(200, [
            {
                title: {rendered: "1. title with post created from axios"},
            },
            {
                title: {rendered: "2. title with post created from axios"},
            },
            {
                title: {rendered: "3. title with post created from axios"},
            },
        ])

        axios.get('https://public-api.wordpress.com/wp/v2/sites/clearli.wordpress.com/posts/')
            .then((response) => {
                console.log('fake response', response.data)
                this.setState({results: response.data})
            })
    }
  render() {
      const { results } = this.state;

  return (
    <div className="Songs">
        <h1>Blog Search</h1>
        <button onClick={this.applyMock}>Mock</button>
        {results.length === 0 ? <p>No Blogs</p> : results.map((post) => <h3 key={post.title.rendered}>{post.title.rendered}</h3>)}
    </div>
  );
}}

export default Blog;
