import { combineReducers, createStore } from "redux";
import { countReducer2 } from "./reducer";

const rootReducer = combineReducers({countReducer2});

export const store = createStore(rootReducer);