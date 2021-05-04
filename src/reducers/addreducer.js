// const customerReducer = (state = [], action) => {
 
//     switch (action.type) {
//     case 'CUSTOMER_ADDED':
//         console.log(action.payload)
//     return action.payload;
    
   
    
//     default:
//     return state;
//     }
//     }
//     export default customerReducer;
let initState={customer:null, error:null}
const customerReducer = (state = initState, action) => {
 
    switch (action.type) {
    case 'CUSTOMER_ADDED':
        return {...state, customer:action.payload, error:null}
    case 'ERROR_MESSAGE':
        return {...state, customer:null, error:action.payload}
   
    
    default:
    return state;
    }
    }
    export default customerReducer;