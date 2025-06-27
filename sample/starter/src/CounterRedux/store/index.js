import {createStore, combineReducers} from 'redux';

import countReducer from './reducer';

const rootReducer = combineReducers({
    countReducer,
});

export const store = createStore(rootReducer);