import {
    createStore, 
    applyMiddleware
} from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import { RootReducer } from '../Reducers';

export type RootStoreType = ReturnType<typeof RootReducer>;
export const middlewares = [ReduxThunk];
export const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));