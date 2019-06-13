import React from 'react'
import Footer from './Footer'
import { shallow } from 'enzyme';

describe('Footer component', () => {
    it('Renders the Footer with Enzyme', () => {
        const footer = shallow(<Footer />);
        expect(footer).toMatchSnapshot();
    })
})