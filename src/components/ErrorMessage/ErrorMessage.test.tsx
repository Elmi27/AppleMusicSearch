import React from 'react';
import { shallow } from 'enzyme';
import { ErrorMessage } from './ErrorMessage';

/**
 * Factory function to create a shallow for ErrorMessage
 */

const setup = () => {
    return shallow(<ErrorMessage>Error Message</ErrorMessage>);
}

it("renders correctly", () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
});

test('renders ErrorMessage component with out error', () => {       
    const wrapper = setup(); 
    expect(wrapper.length).toBe(1);
});

