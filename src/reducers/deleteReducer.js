const customerDelete = (state = [], action) => {
 
    switch (action.type) {
    case 'GET_DELETED_CUSTOMER':
        console.log(action.payload)
    return action.payload;
    
    case 'ERROR_MESSAGE':
        return [];
    
    default:
    return state;
    }
    }
    export default customerDelete;