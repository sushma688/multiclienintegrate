import { GET_ERRORS } from './../actions/type'; 
/**
 * Author: Shakamuri Sushma
 * A Reducer is a function that determines changes to an application's state. 
 */
const initialState={};
export default function(state=initialState,action){
    switch(action.type){
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
}
