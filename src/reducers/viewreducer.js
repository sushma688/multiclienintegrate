const viewCustomerReducer = (state = [], action) => {
 
    switch (action.type) {
    case 'GET_VIEW_CUSTOMER':
        console.log(action.payload)
    return action.payload;
    

    default:
    return state;
    }
    }
    export default viewCustomerReducer;
   