import React from 'react';
import { shallow } from 'enzyme';
import { Cards } from './Cards';

/**
 * Factory function to create a shallow for Cards
 */

const props = {
    cardTextMain: "cardTextMain",
    cardTextSub: "cardTextSub",
    cardBtnMain: "cardBtnMain",
    cardBtnSub: "cardBtnSub",
    cardPrice: "cardPrice",
    cardImageUrl: "cardImageUrl"
}

const setup = () => {
    return shallow(<Cards {...props} />);
}

it("renders correctly", () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
});

test('renders Cards component with out error', () => {       
    const wrapper = setup(); 
    expect(wrapper.length).toBe(1);
});

