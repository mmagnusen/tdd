import React from 'react';
import renderer from 'react-test-renderer'
import data from '../__mocks__/data'
import Posts from './';

describe('Posts component', () => {

    describe('when rendered', () => {

        it('renders without crashing if there are no posts', () => {
            const posts = renderer.create(<Posts/>)
            expect(posts.toJSON()).toMatchSnapshot()
        })

        it('renders, showing posts if posts are passed as props', () => {
            const posts = renderer.create(<Posts posts={data}/>)
            expect(posts.toJSON()).toMatchSnapshot()
        })
    })
});
