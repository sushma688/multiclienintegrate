import {GET_ALL_CUSTOMERS, GET_UPDATED_CUSTOMER, GET_VIEW_CUSTOMER, CUSTOMER_ADDED, GET_DELETED_CUSTOMER, ERROR_MESSAGE, GET_CUSTOMER} from './actiontypes'
import CustomerService from '../components/customer/config/CustomerService';
import history from '../components/customer/history'
export const addCustomer=(customer)=>{
    return dispatch=>{
        return CustomerService.createCustomer(customer).then((response)=>{
            dispatch({type:CUSTOMER_ADDED, payload:response.data});
            CustomerService.getAllCustomer().then((response) => {
                console.log(response.data);
                dispatch({ type: GET_ALL_CUSTOMERS, payload: response.data });
            })
            history.push("/customer")
        }).catch((res)=>{
            dispatch({type:ERROR_MESSAGE, payload:res.data})
        })
    }
    }
    export const getCustomers = () => {
        return dispatch => {
            return CustomerService.getAllCustomer().then((response) => {
                console.log(response.data);
                dispatch({ type: GET_ALL_CUSTOMERS, payload: response.data });
            }).catch((res)=>{
                dispatch({type:ERROR_MESSAGE, payload:res.data})
            })
        }
    }
    export const getView=(id, history) => {
        return dispatch => {
            return CustomerService.getCustomerById(id).then((response) => {
                console.log(response.data);
                dispatch({ type: GET_VIEW_CUSTOMER, payload: response.data });
                history.push("/customer")
            }).catch((res)=>{
                dispatch({type:ERROR_MESSAGE, payload:res.data})
            })
        }
    }
    export const updateCustomers=()=>{
        return dispatch=>{
            return CustomerService.updateCustomer().then((response)=>{
                dispatch({type:GET_UPDATED_CUSTOMER, payload:response.data})
                CustomerService.getAllCustomer().then((response) => {
                    console.log(response.data);
                    dispatch({ type: GET_ALL_CUSTOMERS, payload: response.data });
                })
                history.push("/customer")
            }).catch((res)=>{
                dispatch({type:ERROR_MESSAGE, payload:res.data})
            })
        }
    }
 export const deletedCustomer=(id)=>{
    return dispatch=>{
        return CustomerService.deleteCustomer(id).then((response)=>{
            dispatch({type:GET_DELETED_CUSTOMER, payload:response.data})
            CustomerService.getAllCustomer().then((response) => {
                console.log(response.data);
                dispatch({ type: GET_ALL_CUSTOMERS, payload: response.data });
            })
            history.push("/customer")
        }).catch((res)=>{
            dispatch({type:ERROR_MESSAGE, payload:res.data})
        })
    }
}