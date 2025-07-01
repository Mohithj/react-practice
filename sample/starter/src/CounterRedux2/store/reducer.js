import { initialState2 } from "./state";

export const countReducer2 = (state = initialState2, action) => {
    switch(action.type){
        case "INCREMENT":
            return {...state, count:state.count+1};
        case "DECREMENT":
            return {...state, count:state.count-1};
        default:
            return state;
    }
}