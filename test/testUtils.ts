import { createStore, applyMiddleware } from 'redux';
import { 
    playListReducer,
    DefaultState
} from '../src/Reducers';
import { middlewares } from '../src/Store';

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 *  globals: rootReducer, middlewares.
 */

export const storeFactory = (initialState: DefaultState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(playListReducer, initialState);
}
