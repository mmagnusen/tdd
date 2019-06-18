import React from 'react'
import renderer from 'react-test-renderer'
import Navigation from './Navigation'
import { mount, shallow } from 'enzyme';

describe('Navigation component', () => {
    it('Renders the navigation, with react test renderer', () => {
        const navigation = renderer.create(<Navigation/>)
        expect(navigation.toJSON()).toMatchSnapshot()
    }) 
   
    it('Updates the state to loggedIn when button is clicked', () => {
        const navigation = mount(<Navigation/>);
        navigation
        .find('button#login')
        .simulate('click');
        expect(navigation.state('loggedIn')).toEqual(false);
        navigation.unmount();
    }) 
})

describe('click event', () => {
    const fnClick = jest.fn();

    it('click button should be called', () => {
        const component = mount(<Navigation onClick={fnClick} />);
        component
        .find('button#login')
        .simulate('click')
        .simulate('click')
        expect(fnClick).toHaveBeenCalledTimes(2);
    });
});