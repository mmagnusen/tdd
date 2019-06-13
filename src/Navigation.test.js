import React from 'react'
import renderer from 'react-test-renderer'
import Navigation from './Navigation'

describe('Navigation component', () => {
    it('Renders the navigation, with react test renderer', () => {
        const navigation = renderer.create(<Navigation/>)
        expect(navigation.toJSON()).toMatchSnapshot()
    }) 
   
    it('Updates the state to loggedIn when button is clicked', () => {
        const navigation = renderer.create(<Navigation/>);
        navigation.find('button#login')
        expect(navigation.toJSON()).toMatchSnapshot()
    }) 
})