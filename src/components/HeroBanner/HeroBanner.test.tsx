import React from 'react';
import { shallow } from 'enzyme';
import { HeroBanner } from './HeroBanner';

/**
 * Factory function to create a shallow for HeroBanner
 */

const setup = () => {
    return shallow(<HeroBanner />);
}

it("renders correctly", () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
});

test('renders HeroBanner component with out error', () => {       
    const wrapper = setup(); 
    expect(wrapper.length).toBe(1);
});

