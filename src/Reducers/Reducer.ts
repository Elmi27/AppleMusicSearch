import {
    PlayListType, 
    PlayListDispatchType,
    PLAYLIST_LOADING,
    PLAYLIST_FAILURE,
    PLAYLIST_SUCCESS
} from '../Actions/ActionsTypes';

export interface DefaultState {
    isLoading: boolean,
    playList?: PlayListType
}

const defaultState:DefaultState = {
    isLoading: false
}

export const playListReducer = (state: DefaultState = defaultState, action: PlayListDispatchType) : DefaultState => {
    switch(action.type) {
        case PLAYLIST_FAILURE: 
            return {
                isLoading: false
            }
        case PLAYLIST_LOADING: 
            return {
                isLoading: true
            }    
        case PLAYLIST_SUCCESS: 
            return {
                isLoading: false,
                playList: action.payload
            } 
        default: 
            return state    
    } 
}