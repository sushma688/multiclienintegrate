const updateCustomerReducer = (state = [], action) => {
 
    switch (action.type) {
    case 'GET_UPDATED_CUSTOMER':
        console.log(action.payload)
    return action.payload;
    

    default:
    return state;
    }
    }
    export default updateCustomerReducer;
   