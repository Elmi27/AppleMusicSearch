import { combineReducers } from 'redux';
import { playListReducer } from './Reducer';

export const RootReducer = combineReducers({
    playList: playListReducer,
});