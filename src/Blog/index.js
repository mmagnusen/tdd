import React, { Component } from 'react';
import Posts from '../Posts'
import API from '../API'

class Blog extends Component {
    state = {
        results: [],
    }

    componentDidMount() {
        this.logName('marilyn')
    }

    logName = (name) => {
        console.log(name)
    }

    getPosts = () => {
        const myApi = new API()
        myApi.createEntity({name: 'posts', useMock: true})
        myApi.endpoints.posts.getPosts('')
        .then(response => {
            this.setState({
                results: response.data
            })
        })
    }

  render() {
      const { results } = this.state;

  return (
    <div className="Blog">

        <section className='Blog-title'>
            <h1>Blog Search</h1>
        </section>

        <button onClick={this.getPosts} id='Blog-fetch'>Fetch Posts</button>

        <Posts posts={results} />
    </div>
  );
}}

export default Blog;
