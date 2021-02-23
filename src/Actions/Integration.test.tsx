import moxios from 'moxios';
import { storeFactory } from '../../test';
import { GetPlayList } from './Actions';

/**
 * Integration testing using Moxios 
 *  and using Factory Function to create the Store
 */

describe('GetPlayList action creator', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('get PlayList for Searched keyword', () => {

        const searchTerm = "Song";

        const initialState = { 
            "isLoading": false,
        }

        const response = { 
            "results" : {
                trackId: "trackId",
                artistName: "artistName",
                trackName: "trackName",
                trackViewUrl: "trackViewUrl",
                previewUrl: "previewUrl",
                collectionPrice: "123",
                artworkUrl100 : "artworkUrl100"
            }
        }

        const store = storeFactory(initialState);

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: response,
            });
        });

        return store.dispatch(GetPlayList(searchTerm)).then(() => {
            const responseState = { 
                "isLoading": false,
                "playList" : {
                        "results" : {
                        trackId: "trackId",
                        artistName: "artistName",
                        trackName: "trackName",
                        trackViewUrl: "trackViewUrl",
                        previewUrl: "previewUrl",
                        collectionPrice: "123",
                        artworkUrl100 : "artworkUrl100"
                    }
                }
            }
            const newState = store.getState();
            expect(newState).toEqual(responseState);
        });

    });
});