const getCustomerReducer = (state = [], action) => {
 
    switch (action.type) {
    case 'GET_ALL_CUSTOMERS':
        console.log(action.payload)
    return action.payload;
    

    default:
    return state;
    }
    }
    export default getCustomerReducer;
   