import { GET_PRODUCTS, GET_PRODUCT, DELETE_PRODUCT} from "../actions/type";
/**
 * Author: Shakamuri Sushma
 * A Reducer is a function that determines changes to an application's state.
 * Redux relies heaviy on reducer functions that takes the previous state and an action in order to execute the next state.
 * 
 */
const initialState={
    merchants:[],
    merchant:{}
};

export default function(state=initialState,action){
    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state,
                merchants:action.payload
            }
        case GET_PRODUCT:
            return{
                ...state,
                merchant:action.payload
            }
        case DELETE_PRODUCT:
            return{
                ...state,
                merchants:state.merchants.filter(
                merchant=>merchant.productId!==action.payload
                )
            };
        default:
        return state; 
    }
}