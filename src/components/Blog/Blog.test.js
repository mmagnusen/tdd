import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import data from '../__mocks__/data'
import Blog from './';

describe('Blog component', () => {

    describe('when rendered', () => {

        it('renders without crashing', () => {
            const blog = renderer.create(<Blog/>)
            expect(blog.toJSON()).toMatchSnapshot()
        })

        it('Checks that componentDidMount is called when component mounts', () => {

            //https://remarkablemark.org/blog/2018/06/13/spyon-react-class-method/
            
            const spy = jest.spyOn(Blog.prototype, 'componentDidMount');
            const wrapper = mount(<Blog />);
            wrapper.instance().componentDidMount();
            expect(spy).toHaveBeenCalled();
        });

        it('should call logName() when component mounts', () => {
            const wrapper = shallow(<Blog />);

            const instance = wrapper.instance()
            
            jest.spyOn(instance, 'logName')

            instance.componentDidMount()

            expect(instance.logName).toHaveBeenCalled()
        });
    })
});
