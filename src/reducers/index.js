import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import getCustomerReducer from './getreducer';
import merchantsReducer from './merchantsReducer';
import updateCustomerReducer from './updatedreducer';
import viewCustomerReducer from './viewreducer';
import customerDelete from './deleteReducer'; 
import customerReducer from './addreducer';
/**
 * Author: Shakamuri Sushma
 */
export default combineReducers({
   errors:errorReducer,
   merchants:merchantsReducer,
   getlist: getCustomerReducer,
   getUpdateData:updateCustomerReducer,
   getView:viewCustomerReducer,
   getAddCustomer:customerReducer,
   getDeleteCustomer:customerDelete
});