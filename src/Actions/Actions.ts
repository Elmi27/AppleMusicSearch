import { Dispatch } from 'redux';
import axios from 'axios';
import {
    PlayListDispatchType,
    PLAYLIST_LOADING,
    PLAYLIST_FAILURE,
    PLAYLIST_SUCCESS
} from './ActionsTypes';

/**
 * Returns Redux Thunk function that initiates an axios request 
 *    and dispatches the response as a 'PLAYLIST_LOADING','PLAYLIST_FAILURE' and 'PLAYLIST_SUCCESS' action
 */

export const GetPlayList = (searchTerm: string) => async (dispatch: Dispatch<PlayListDispatchType>) => {
    try {
        dispatch({
            type: PLAYLIST_LOADING
        });

        const res = await axios.get(`https://itunes.apple.com/search?term=${encodeURIComponent(
            searchTerm
          )}&entity=musicVideo`);

        dispatch({
            type: PLAYLIST_SUCCESS,
            payload: res.data
        });

    } catch(e) {
        dispatch({
            type: PLAYLIST_FAILURE
        });
    }
}