import React from 'react';
import { shallow, mount } from 'enzyme';
import Blog from './Blog';
import axios from 'axios';


import MockAdapter from 'axios-mock-adapter';

// jest.unmock('axios');
const mocktest = jest.mock('getPosts');

describe('Blog component', () => {
    describe('when rendered', () => {
        it('should fetch a list of posts', () => {
    
            //const getSpy = jest.spyOn(axios, 'get');
            const blogInstance = mount(<Blog />);
            expect(mocktest).toHaveBeenCalledTimes(1);
        });
    })
});
