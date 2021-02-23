import React from 'react';
import { shallow } from 'enzyme';
import { AlbumWrapper } from './AlbumWrapper';

/**
 * Factory function to create a shallow for AlbumWrapper
 *  Only 9 records are shown to the users on page load
 */

const props = {
    results : [{
        trackId: "trackId",
        artistName: "artistName",
        trackName: "trackName",
        trackViewUrl: "trackViewUrl",
        previewUrl: "previewUrl",
        collectionPrice: "123",
        artworkUrl100 : "artworkUrl100"
    },
    {
        trackId: "trackId",
        artistName: "artistName",
        trackName: "trackName",
        trackViewUrl: "trackViewUrl",
        previewUrl: "previewUrl",
        collectionPrice: "123",
        artworkUrl100 : "artworkUrl100"
    },
    {
        trackId: "trackId",
        artistName: "artistName",
        trackName: "trackName",
        trackViewUrl: "trackViewUrl",
        previewUrl: "previewUrl",
        collectionPrice: "123",
        artworkUrl100 : "artworkUrl100"
    },
    {
        trackId: "trackId",
        artistName: "artistName",
        trackName: "trackName",
        trackViewUrl: "trackViewUrl",
        previewUrl: "previewUrl",
        collectionPrice: "123",
        artworkUrl100 : "artworkUrl100"
    },
    {
        trackId: "trackId",
        artistName: "artistName",
        trackName: "trackName",
        trackViewUrl: "trackViewUrl",
        previewUrl: "previewUrl",
        collectionPrice: "123",
        artworkUrl100 : "artworkUrl100"
    },
    {
        trackId: "trackId",
        artistName: "artistName",
        trackName: "trackName",
        trackViewUrl: "trackViewUrl",
        previewUrl: "previewUrl",
        collectionPrice: "123",
        artworkUrl100 : "artworkUrl100"
    },
    {
        trackId: "trackId",
        artistName: "artistName",
        trackName: "trackName",
        trackViewUrl: "trackViewUrl",
        previewUrl: "previewUrl",
        collectionPrice: "123",
        artworkUrl100 : "artworkUrl100"
    },
    {
        trackId: "trackId",
        artistName: "artistName",
        trackName: "trackName",
        trackViewUrl: "trackViewUrl",
        previewUrl: "previewUrl",
        collectionPrice: "123",
        artworkUrl100 : "artworkUrl100"
    },
    {
        trackId: "trackId",
        artistName: "artistName",
        trackName: "trackName",
        trackViewUrl: "trackViewUrl",
        previewUrl: "previewUrl",
        collectionPrice: "123",
        artworkUrl100 : "artworkUrl100"
    },
    {
        trackId: "trackId",
        artistName: "artistName",
        trackName: "trackName",
        trackViewUrl: "trackViewUrl",
        previewUrl: "previewUrl",
        collectionPrice: "123",
        artworkUrl100 : "artworkUrl100"
    }]
}

const setup = () => {
    return shallow(<AlbumWrapper content={props} />);
}

it("renders correctly", () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
});

test('renders AlbumWrapper component with out error', () => {       
    const wrapper = setup(); 
    expect(wrapper.length).toBe(1);
});

test('renders only 9 children components', () => {       
    const wrapper = setup(); 
    const count = wrapper.children().filter('.col-md-4').length;
    expect(count).toBe(9);
});