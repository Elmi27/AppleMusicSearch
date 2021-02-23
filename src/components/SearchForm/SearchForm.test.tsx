import React from 'react';
import { shallow } from 'enzyme';
import { SearchForm } from './SearchForm';
 
/**
 * Factory function to create a shallow for Form Search
 *  `useReducer` tested using Mock Function.  
 */

const mockFormSubmit = jest.fn();

const props = {
    isLoading: false,
    labelText: "Label",
    placeHolderText: "Text Box",
    errorText: "Error",
    searchDispatch: mockFormSubmit
}

const setup = () => {
    mockFormSubmit.mockClear();
    const mockUseReducer = jest.fn()
        .mockReturnValue([
            { isError: false, inputVal: ''},
            jest.fn()
        ]);
  
    React.useReducer = mockUseReducer;
    return shallow(<SearchForm {...props} />);
}

it("renders correctly", () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
});

test('renders Search Form component with out error', () => {       
    const wrapper = setup(); 
    expect(wrapper.length).toBe(1);
});

test('renders Form Label without error with correct prop text', () => {
    const wrapper = setup();
    expect(wrapper.find('FormLabel').length).toBe(1);
    expect(wrapper.find('FormLabel').text()).toEqual("Label");
});

test('renders Input Text box without error', () => {
    const wrapper = setup();
    expect(wrapper.find('FormControl').length).toBe(1);
});

test('renders Submit button without error with correct prop text', () => {
    const wrapper = setup();
    expect(wrapper.find('Button').length).toBe(1);
    expect(wrapper.find('Button').text()).toEqual("Search");
});

test('renders Error Message without error with correct prop text', () => {
    const wrapper = setup();
    expect(wrapper.find('Feedback').length).toBe(1);
    expect(wrapper.find('Feedback').text()).toEqual("Error");
});