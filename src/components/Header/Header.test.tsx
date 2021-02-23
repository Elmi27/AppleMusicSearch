import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

/**
 * Factory function to create a shallow for Header
 */

const props = {
    logoImage: "imagePath", 
    logoText: "logoText"
}

const setup = () => {
    return shallow(<Header {...props} />);
}

it("renders correctly", () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
});

test('renders Header component with out error', () => {       
    const wrapper = setup(); 
    expect(wrapper.length).toBe(1);
});

test('renders text component without error with correct passed prop', () => {
    const wrapper = setup();
    expect(wrapper.find('.align-middle').length).toBe(1);
    expect(wrapper.find('.align-middle').text()).toEqual("logoText");
});

test('renders logo image with out error with correct passed prop path', () => {
    const wrapper = setup();
    expect(wrapper.find("img").length).toBe(1);
    expect(wrapper.find("img").prop("src")).toEqual("imagePath");
});

