import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import Try from './';

describe('Try component', () => {

    describe('when rendered', () => {

        it('renders without crashing', () => {
            const tryComponent = renderer.create(<Try/>)
            expect(tryComponent.toJSON()).toMatchSnapshot()
        })
    })

    describe('when rendered', () => {

        it('clicks and mounts without crashing', () => {
            const tryComponent = mount(<Try />);
            tryComponent
            .find('button#calculate')
            .simulate('click')
            expect(tryComponent).toMatchSnapshot()
        })
    })

    describe('when clicked, it changes the DOM', () => {

       // const fnClick = jest.fn();

        it('click button should be called', () => {
            const component = mount(<Try />);
            //console.log(component.debug())
            component
            .find('button#calculate')
            .simulate('click')
            //console.log(component.debug())
            expect(component.find('h1.fudge')).toHaveLength(333)

        });
    })
});
