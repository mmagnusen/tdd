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
        myApi.createEntity({name: 'posts'})
        myApi.endpoints.posts.getPosts()
        .then(response => {
            console.log('response', response)
            this.setState({
                results: response.data
            })
        })
        .then(() => console.log('get some data from key'))
        .catch((error) => {
                
            if (error.response.status === 400) {
                this.setState({error: {
                    code: 400,
                    text: 'not found'
                }})
            } else {
                this.setState({error: {
                    code: 'unknown',
                    text: 'An unknown error has occured'
                }}) 
            }
        })
        .then(() => console.log('forwarding to url'))
    }

  render() {
      const { results, error } = this.state;

  return (
    <div className="Blog">

        <section className='Blog-title'>
            <h1>Blog Search</h1>
        </section>

        <button onClick={this.getPosts} id='Blog-fetch'>Fetch Posts</button>

        {error ? 
        <div>
            <p>There has been an error fetching your posts</p>
            <p>Error code: {error.code}</p>
            <p>Error message: {error.message}</p>
        </div>
            :
        <Posts posts={results} />}

    </div>
  );
}}

export default Blog;
