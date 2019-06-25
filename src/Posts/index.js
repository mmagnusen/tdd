import React, { Component } from 'react';

class Posts extends Component {

  render() {
      const { posts = [] } = this.props;

  return (
        <section className='Blog-posts'>
            <h4>Posts:</h4>
            {posts.length === 0 ? <p>No posts</p> : posts.map((post) => <h3 key={post.title.rendered}>{post.title.rendered}</h3>)}
        </section>
  );
}}

export default Posts;
